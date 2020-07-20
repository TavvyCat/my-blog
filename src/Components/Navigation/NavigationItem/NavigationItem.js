import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

const NavigationItem = (props) => (
  <NavItem className="list-group-item active">
    <NavLink className="text-decoration-none" href={`/${props.link}`}>
      {props.title}
    </NavLink>
  </NavItem>
)

export default NavigationItem;