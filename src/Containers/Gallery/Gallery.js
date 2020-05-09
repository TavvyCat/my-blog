import React, { Component } from 'react';
import { connect } from 'react-redux';
import Classes from './Gallery.css';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import Axios from '../../Axios';
import * as actions from '../../store/actions/index';

class Gallery extends Component {
  componentDidMount() {
    this.props.onFetchGallery();
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.images === this.props.images) {
      return false;
    } else return true
  }

  render() {
    const images = this.props.images ? (
      <div className={Classes.Gallery}>
        {this.props.images.map(image => (
          <div 
            className={Classes.GalleryImageContainer} 
            key={image.imgURL}
            style={{width: `${image.width}px`}}>
            <img className={Classes.GalleryImage} src={image.imgURL} alt=""/>
          </div>
        ))}
      </div>
    ) : null;
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