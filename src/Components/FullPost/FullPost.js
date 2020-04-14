import React from 'react';
import './FullPost.css';
import Aux from '../../HOC/AuxComp/AuxComp';

const FullPost = props => {
  let newText = props.location.state.content.split('\n').map((item, i) => <p key={i}>{item}</p>);
  return (
    <div className="FullPost">
      <Aux>
        <img src={props.location.state.images._titleImage} alt="" />
        <h2>{props.location.state.title}</h2>
        <h5>{props.location.state.date}</h5>
        {newText}
        <h1>More Posts</h1>
      </Aux>
    </div>
  )
}

export default FullPost;