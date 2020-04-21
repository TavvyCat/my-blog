import React from 'react';
import Classes from './Sidebar.css';
import Aux from '../../../HOC/AuxComp/AuxComp';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

const Sidebar = (props) => {
  let classes = [Classes.Sidebar];
  if (props.showSidebar) {
    classes.push(Classes.Opened);
  } else {
    classes.push(Classes.Closed);
  }

  return (
    <Aux>
      <Backdrop 
        show={props.showSidebar}
        clicked={props.clicked}/>
      <div className={classes.join(' ')}>
        <NavigationItems className="SidebarNavigationItems" clicked={props.clicked}/>
      </div>
    </Aux>
  )
}

export default Sidebar;