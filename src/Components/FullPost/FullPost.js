import React, { Component } from 'react';
import { storage } from '../../Firebase/Firebase';
import Aux from '../HOC/AuxComp';

class FullPost extends Component { 
  state = {
    data: null,
    imgURLs: null
  }

  componentDidMount () {
    console.log("Component did mount");
    this.getData();
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(this.props, this.state)
    console.log(nextProps, nextState)
    if (nextProps.location.state !== this.props.location.state) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate (nextProps, nextState) {
    console.log("component did update");
    if (this.state !== nextState) {
      this.getData();
    }
  }

  async getData () {
    const obj = this.props.location.state.images;
    const images = new Array(0);
    const dataState = {...this.props.location.state};
    for (let key in obj) {
      await storage.ref(obj[key].file).child(obj[key].imageName).getDownloadURL()
      .then(response => {
        images.push(response);
      })
      .catch(error => console.log(error));
    }
    this.setState({data: dataState, imgURLs: images});
  }

  render() {
    let post = this.state.imgURLs && this.state.data ? (
      <Aux>
        <img src={this.state.imgURLs.shift()} alt="" style={{width: "50vw", height: "auto", marginTop: "20px"}}/>
        <h2 style={{fontSize: "32px", fontFamily: "cursive"}}>{this.state.data.title}</h2>
        <h5>{this.state.data.date}</h5>
        <p style={{lineHeight: "2", margin: "20px"}}>{this.state.data.content}</p> 
        <h1>More Posts</h1>
      </Aux>
    ) : null;

    return (
      <Aux>
        {post}
      </Aux>
    )
  }
}

export default FullPost;