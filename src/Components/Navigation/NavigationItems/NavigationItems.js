import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <div className={props.className}>
    <NavigationItem 
      link="our-story"
      title="Our Story" />
    <NavigationItem 
      link="blog"
      title="Blog" />
    <NavigationItem 
      link="gallery"
      title="Gallery" />
    <NavigationItem 
      link="quote-of-the-week"
      title="Quote of the Week" />
    <NavigationItem 
      link="forum"
      title="Forum" />
  </div>
)

export default NavigationItems;