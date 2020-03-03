import React, { Component } from 'react';
import { storage } from '../../Firebase/Firebase';
import Aux from '../HOC/AuxComp';
import Paragraph from '../UI/Paragraph/Paragraph';

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.getImages();
  }

  state = {
    imgURL: ""
  }

  getImages() {
    storage.ref(this.props.imgFile).child(this.props.imgName).getDownloadURL()
    .then(response => {
      this.setState({imgURL: response});
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <Aux>

      </Aux>
    )
  }
}

export default FullPost;