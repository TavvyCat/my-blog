import React from 'react';
import './Paragraph.css';

const Paragraph = (props) => {
    const float = props.float === "right" ? "Right" : "Left";
    const header = props.headerType === "h2" ? 
        <h2 
            className={float}>
            {props.headerContent}
        </h2> : 
        <h3 
            className={float}>
            {props.headerContent}
        </h3>

    return (
      <div className="Paragraph">
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