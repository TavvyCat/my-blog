import React, { Component } from 'react';
import Axios from '../../Axios';
import Paragraph from '../UI/Paragraph/Paragraph';

class FullPost extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    console.log(this.props.location.aboutProps);
  }

  render () {
    console.log(this.props.location.aboutProps)
    return (
      <p>FullPost</p>
    )
  }
}

export default FullPost;