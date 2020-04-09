import React from 'react';
import Aux from '../../HOC/AuxComp/AuxComp';

const FullPost = props => (
  <Aux>
    <img src={props.location.state.images._titleImage} alt="" style={{width: "50vw", height: "auto", marginTop: "20px"}}/>
    <h2 style={{fontSize: "32px", fontFamily: "cursive"}}>{props.location.state.title}</h2>
    <h5>{props.location.state.date}</h5>
    <p style={{lineHeight: "2", margin: "20px"}}>{props.location.state.content}</p> 
    <h1>More Posts</h1>
  </Aux>
)

export default FullPost;