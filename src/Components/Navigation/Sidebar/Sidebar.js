import React from 'react';
import Classes from './Sidebar.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import { Collapse } from 'reactstrap';
import Aux from '../../../HOC/AuxComp/AuxComp';

const Sidebar = (props) => {
  return (
    <Aux>
      <Backdrop 
        show={props.showSidebar}
        clicked={props.clicked}/>
      <Collapse isOpen={props.showSidebar}>
        <NavigationItems className={Classes.SidebarNavigationItems} clicked={props.clicked}/>
      </Collapse>
    </Aux>
  )
}

export default Sidebar;