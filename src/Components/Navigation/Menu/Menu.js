import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Menu.css';

const Menu = (props) => {
  return (
    <header className="Menu">
      <div 
        className="sidebar-opener"
        onClick={props.clicked}>
        <i className="fas fa-bars"></i>
        MENU
      </div>
      <NavigationItems className="MenuNavigationItems"/>
    </header>
  )
}

export default Menu;