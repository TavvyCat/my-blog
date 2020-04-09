import React from 'react';
import './OurStory.css';
import Paragraph from '../../Components/UI/Paragraph/Paragraph';

const OurStory = () => (
  <div className="OurStory">
    <Paragraph 
      file="/OurStory"
      imgURL="https://firebasestorage.googleapis.com/v0/b/adventure-blog-286e8.appspot.com/o/OurStory%2FPic-01.jpg?alt=media&token=8bea4bc5-eb7d-4d01-bac6-7291a4a18be5"
      headerType="h2"
      headerContent="Our Story"
      alt=""
      float="left"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
    <Paragraph 
      file="/OurStory"
      imgURL="https://firebasestorage.googleapis.com/v0/b/adventure-blog-286e8.appspot.com/o/OurStory%2FPic-02.jpg?alt=media&token=15e149fc-a73a-40be-9b3b-d8bb5154c3d7"
      headerType="h3"
      headerContent=""
      alt=""
      float="right"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
    <Paragraph 
      file="/OurStory"
      imgURL="https://firebasestorage.googleapis.com/v0/b/adventure-blog-286e8.appspot.com/o/OurStory%2FPic-03.jpg?alt=media&token=8d2aab18-b60f-4b60-81d5-3fb7c0a9c267"
      headerType="h3"
      headerContent="Current Situation"
      alt=""
      float="left"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
  </div>
)

export default OurStory;