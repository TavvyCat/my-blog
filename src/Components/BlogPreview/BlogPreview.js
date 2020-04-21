import React from 'react';
import Classes from './BlogPreview.css';

const BlogPreview = props => (
  <div className={Classes.BlogPreview}>
    <div>
      <img src={props.titleImage} alt="" />
    </div>
    <h3>{props.title}</h3>
    <p className={Classes.lineClamp}>{props.content}</p>
    <h4>Posted {props.date}</h4>
  </div>
)

export default BlogPreview;