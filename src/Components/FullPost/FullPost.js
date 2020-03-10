import React, { Component } from 'react';
import { storage } from '../../Firebase/Firebase';
import Aux from '../HOC/AuxComp';

class FullPost extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state, 
      imgURLs: null
    }
  }

  componentDidMount () {
    console.log(this.state)
    this.getImages();
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log("should component update")
  //   console.log(this.state)
  //   console.log(nextState)
  //   if (this.state.data !== nextState.data) {
  //     console.log("true")
  //     this.getData();
  //     return true;
  //   } else {
  //     console.log("false")
  //     return false;
  //   }
  // }

  componentDidUpdate() {
    console.log("component did update")
  }

  async getImages () {
    const obj = this.props.location.state.images;
    const images = new Array(0);
    for (let key in obj) {
      await storage.ref(obj[key].file).child(obj[key].imageName).getDownloadURL()
      .then(response => {
        images.push(response);
      })
      .catch(error => console.log(error));
    }
    this.setState({ imgURLs: images })
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