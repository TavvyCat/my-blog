import React from 'react';
import Classes from './Paragraph.css';

const Paragraph = (props) => {
    const float = props.float === "right" ? Classes.Right : Classes.Left;
    const header = props.headerContent ? 
        <h2 
            className={float}>
            {props.headerContent}
        </h2> : null

    return (
      <div className={Classes.Paragraph}>
          <img 
                className={float} 
                src={props.imgURL} 
                alt={props.alt}/>
          {header}
          <p className={float}>{props.content}</p>
      </div>
    )
  }

export default Paragraph;