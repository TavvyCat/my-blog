import React, { Component } from 'react';
import { storage } from '../../Firebase/Firebase';
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
      <div className="BlogPreview">
        <div>
          <img src={this.state.imgURL} alt="" />
        </div>
        <h3>{this.props.title}</h3>
        <p className="line-clamp">{this.props.content}</p>
        <h4>Posted {this.props.date}</h4>
      </div>
    )
  }
}

export default FullPost;