import React from 'react';
import './BlogPreview.css';

const BlogPreview = props => (
  <div className="BlogPreview">
    <div>
      <img src={props.titleImage} alt="" />
    </div>
    <h3>{props.title}</h3>
    <p className="line-clamp">{props.content}</p>
    <h4>Posted {props.date}</h4>
  </div>
)

export default BlogPreview;