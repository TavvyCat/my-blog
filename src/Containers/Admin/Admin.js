import React, { Component } from "react";
import { connect } from "react-redux";
import { storage } from '../../firebase';
import Axios from '../../Axios';
import Classes from './Admin.css';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { updateObject } from '../../store/utility';
import { Redirect } from 'react-router-dom';

class Admin extends Component {
    state = {
        progress: 0
    }

    componentDidMount() {
        this.props.onTryAutoSignIn();
    }

    formSubmission = event => {
        event.preventDefault();
        const formData = {
            ...this.props.adminState
        }
        this.props.onSubmitForm(formData);
    }

    updateOtherImagesHandler = (URL) => {
        const stateImages = this.props.adminState.otherImages;
        stateImages.push(URL);
        const newState = updateObject(this.props.adminState, { otherImages: stateImages });
        this.props.onChangeAdminState(newState);
        return;
    }

    imgSelectedHandler = (URL) => {
        if (!this.props.adminState.titleImage) {
            const newState = updateObject(this.props.adminState, { titleImage: URL });
            this.props.onChangeAdminState(newState);
            return;
        } else {
            this.updateOtherImagesHandler(URL)
        }
    }

    imgUploadHandler = () => {
        const image = this.props.imageUpload;
        const uploadTask = storage.ref(`Gallery/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // Progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            }, 
            (error) => {
                // Error function
                console.log(error);
            }, 
            () => {
                // Complete function
                storage.ref('Gallery').child(image.name).getDownloadURL()
                .then(URL => {
                    const imageData = { imgURL: URL, name: image.name, width: "400"}
                    this.props.onImageUploaded(URL);
                    this.imgSelectedHandler(URL);
                    Axios.post(`/Gallery.json?auth=${this.props.token}`, imageData);
                })
            })
    }
    
    inputChangeHandler = event => {
        if (event.target.name === 'imageUpload') {
            const image = event.target.files[0];
            this.props.onChangeImageUpload(image);
            return;
        } else {
            const newState = updateObject(this.props.adminState, { [event.target.name]: event.target.value });
            this.props.onChangeAdminState(newState);
        }
    }

    render() {
        const authRedirect = !this.props.isAuthenticated ? <Redirect to='/login' /> : null;
        const progressBar = this.state.progress ? 
            <progress value={this.state.progress} max="100" /> : null;
        return (
            <div className={Classes.Admin}>
                {authRedirect}
                <label>
                    Images:
                    {progressBar}
                    <img 
                        src={this.props.uploadedImage} alt="" 
                        style={{ width: '300px', height: 'auto'}} />
                    <input 
                        name="imageUpload"
                        type="file" 
                        onChange={this.inputChangeHandler} />
                    <button onClick={this.imgUploadHandler}>Upload</button>
                </label>
                <form onSubmit={this.formSubmission} id="AdminForm" className={Classes.AdminForm}>
                    <label>
                        Title:
                        <input 
                            name="title"
                            type="text" 
                            value={this.props.adminState.title} 
                            onChange={this.inputChangeHandler}/>
                    </label>
                    <label>
                        Link:
                        <input 
                            name="link"
                            type="text" 
                            value={this.props.adminState.link} 
                            onChange={this.inputChangeHandler}/>
                    </label>
                    <label>
                        Content:
                    </label>
                    <textarea
                        rows="25"
                        name="content"
                        type="text-area" 
                        form="AdminForm"
                        value={this.props.adminState.content} 
                        onChange={this.inputChangeHandler}>
                    </textarea>
                    <input type="submit" value="Submit" id="SubmitButton"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        adminState: state.adminState,
        imageUpload: state.imageUpload,
        uploadedImage: state.uploadedImage,
        isAuthenticated: state.token !== null,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitForm: (formData) => dispatch(actions.postBlog(formData)),
        onChangeAdminState: (newState) => dispatch(actions.changeAdminState(newState)),
        onChangeImageUpload: (image) => dispatch(actions.changeImageUpload(image)),
        onImageUploaded: (imgURL) => dispatch(actions.updateUploadedImage(imgURL)),
        onTryAutoSignIn: () => dispatch(actions.checkLoginState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Admin, Axios));