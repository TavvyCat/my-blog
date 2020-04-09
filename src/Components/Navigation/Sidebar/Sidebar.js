import React from 'react';
import './Sidebar.css';
import Aux from '../../../HOC/AuxComp/AuxComp';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

const Sidebar = (props) => {
  let classes = ["Sidebar"];
  if (props.showSidebar) {
    classes.push('Opened');
  } else {
    classes.push('Closed');
  }

  return (
    <Aux>
      <Backdrop 
        show={props.showSidebar}
        clicked={props.clicked}/>
      <div className={classes.join(' ')}>
        <NavigationItems className="SidebarNavigationItems"/>
      </div>
    </Aux>
  )
}

export default Sidebar;