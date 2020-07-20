import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './Menu.css';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

const Menu = (props) => {
  return (
    <Navbar>
      <NavbarToggler onClick={props.clicked}>
        <i id={Classes.bars}className="fas fa-bars"></i>
      </NavbarToggler>
      <NavbarBrand src="https://firebasestorage.googleapis.com/v0/b/adventure-blog-286e8.appspot.com/o/UI%2F300x100-blog-logo.jpg?alt=media&token=12d04092-ba48-488f-8f18-72592efe4c6c"></NavbarBrand>
      <NavigationItems className={Classes.MenuNavigationItems}/>
    </Navbar>
  )
}

export default Menu;