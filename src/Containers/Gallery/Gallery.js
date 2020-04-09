import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Gallery.css'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import Axios from '../../Axios';
import * as actions from '../../store/actions/index';

class Gallery extends Component {
  componentDidMount() {
    this.props.onFetchGallery();
  }

  render() {
    // const images = this.props.images;
    // let imagesEl = images ? 
    //      : null;
    console.log(this.props.images);
    return (
      <div className="Gallery">
        {this.props.images.map(image => (
          <div className="GalleryImageContainer" key={image.imgURL}>
            <img className="GalleryImage" src={image.imgURL} alt=" "/>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.galleryData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchGallery: () => dispatch(actions.fetchGalleryData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Gallery, Axios));