import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import { Nav } from 'reactstrap';

const NavigationItems = (props) => (
  <Nav className="list-unstyled" onClick={props.clicked}>
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
  </Nav>
)

export default NavigationItems;