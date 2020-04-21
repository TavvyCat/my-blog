import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './NavigationItem.css';

const NavigationItem = (props) => (
  <NavLink
    className={Classes.NavigationItem}
    to={`/${props.link}`}>
    {props.title}
  </NavLink>
)

export default NavigationItem;