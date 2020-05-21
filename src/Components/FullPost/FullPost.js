import React from 'react';
import Classes from './FullPost.css';
import Aux from '../../HOC/AuxComp/AuxComp';

const FullPost = props => {
  // let newText = props.location.state.content.split('\n').map((item, i) => <p key={i}>{item}</p>);
  const state = {...props.location.state};
  return (
    <div className={Classes.FullPost}>
      <Aux>
        <div className={Classes.TitleImageConatiner}>
          <img src={state.titleImage} alt="" className={Classes.TitleImage}/>
        </div>
        <h2>{state.title}</h2>
        <h5>{state.date}</h5>
        <p>{state.content}</p>
        <div className={Classes.OtherImages}>
          {state.otherImages.map(image => (
            <div className={Classes.OtherImageContainer}>
              <img src={image} alt="" key={image} className={Classes.OtherImage}/>
            </div>
          ))}
        </div>
        <h1>More Posts</h1>
      </Aux>
    </div>
  )
}

export default FullPost;