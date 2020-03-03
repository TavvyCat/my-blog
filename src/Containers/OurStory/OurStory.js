import React from 'react';
import './OurStory.css';
import Paragraph from '../../Components/UI/Paragraph/Paragraph';

const OurStory = () => (
  <div className="OurStory">
    <Paragraph 
      file="/OurStory"
      imgName="Pic-01.jpg"
      headerType="h2"
      headerContent="Our Story"
      alt=""
      float="left"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
    <Paragraph 
      file="/OurStory"
      imgName="Pic-02.jpg"
      headerType="h3"
      headerContent=""
      alt=""
      float="right"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
    <Paragraph 
      file="/OurStory"
      imgName="Pic-03.jpg"
      headerType="h3"
      headerContent="Current Situation"
      alt=""
      float="left"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
  </div>
)

export default OurStory;