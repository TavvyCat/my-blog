import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './Menu.css';

const Menu = (props) => {
  return (
    <header className={Classes.Menu}>
      <div 
        className={Classes.sidebarOpener}
        onClick={props.clicked}>
        <i id={Classes.bars}className="fas fa-bars"></i>
        MENU
      </div>
      <NavigationItems className={Classes.MenuNavigationItems}/>
    </header>
  )
}

export default Menu;