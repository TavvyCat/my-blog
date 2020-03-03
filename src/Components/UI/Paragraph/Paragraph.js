import React, { Component } from 'react';
import { storage } from '../../../Firebase/Firebase';
import './Paragraph.css';

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.getImages();
  }
  
  state = {
    imgURL: null
  }

  getImages() {
    storage.ref(this.props.file).child(this.props.imgName).getDownloadURL()
    .then(response => {
      this.setState({imgURL: response});
    })
    .catch(error => console.log(error));
  }

  render() {
    const float = this.props.float === "right" ? "Right" : "Left";
    const img = this.state.imgURL ? 
      <img 
        className={float} 
        src={this.state.imgURL} 
        alt={this.props.alt}/> 
      : null;
    const header = this.props.headerType === "h2" ? 
      <h2 
        className={float}>
        {this.props.headerContent}
      </h2> : 
      <h3 
        className={float}>
        {this.props.headerContent}
      </h3>

    return (
      <div className="Paragraph">
        {img}
        {header}
        <p className={float}>{this.props.content}</p>
      </div>
    )
  }
}

export default Paragraph;