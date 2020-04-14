import React, { Component } from "react";
import './Admin.css';
import * as actions from '../../store/actions/index';

class Admin extends Component {
    state = {
        [this.random]: {
            title: "",
            link: "",
            content: "",
            images: {
                _titleImage: "",
                otherImages: []
            },
            date: ""
        },
        random: this.random
    }
    
    random = " "

    formSubmission = event => {
        const formData = {
            ...this.state
        }
    }
    
    inputChangeHandler (event) {
        const state = { ...this.state };
        state[this.random][event.target.name] = event.target.value;
        this.setState({...state});
    }

    render() {
        return (
            <form onSubmit={this.formSubmission}>
                <label>
                    Title:
                    <input 
                        name="title"
                        type="text" 
                        value={this.state[this.random].title} 
                        onChange={(event) => this.inputChangeHandler(event)}/>
                </label>
                <label>
                    Link:
                    <input 
                        name="link"
                        type="text" 
                        value={this.state[this.random].link} 
                        onChange={(event) => this.inputChangeHandler(event)}/>
                </label>
                <label>
                    Content:
                    <input 
                        name="content"
                        type="text" 
                        value={this.state[this.random].title} 
                        onChange={(event) => this.inputChangeHandler(event)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmitForm: () => dispatch(actions.submitForm)
//     }
// }

export default Admin;