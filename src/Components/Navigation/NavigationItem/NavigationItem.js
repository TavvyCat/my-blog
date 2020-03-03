import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

const NavigationItem = (props) => (
  <NavLink
    className="NavigationItem"
    to={`/${props.link}`}>
    {props.title}
  </NavLink>
)

export default NavigationItem;