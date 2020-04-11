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

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    const shuffledImages = this.props.images ? this.shuffleArray(this.props.images) : null;
    const images = shuffledImages ? (
      <div className="Gallery">
        {shuffledImages.map(image => (
          <div className="GalleryImageContainer" key={image.imgURL}
            style={{width: `${image.width}px`}}>
            <img className="GalleryImage" src={image.imgURL} alt=" "/>
          </div>
        ))}
      </div>
    ) : null;
    console.log(this.props.images);
    return (
      <div>
        {images}
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