import React, { Component } from 'react';
import { storage } from '../../Firebase/Firebase';
import Aux from '../HOC/AuxComp';

class FullPost extends Component { 
  state = {
    data: {},
    imgURLs: []
  }

  componentDidMount () {
    this.getData();
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log("should component update")
    console.log(this.state)
    console.log(nextState)
    if (this.state !== nextState) {
      console.log("true")
      return true;
    } else {
      console.log("false")
      return false;
    }
  }

  componentDidUpdate () {
    console.log("component did update")
    this.getData();
  }

  async getData () {
    console.log("get data")
    const obj = this.props.location.state.images;
    const images = new Array(0);
    console.log(this.props.location.state)
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