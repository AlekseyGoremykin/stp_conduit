import React from 'react';
import { NavLink } from 'react-router-dom';
import './navMenu.css';

function NavMenu() {

  return (
    <>
      <div className="navMenuWrapper">
        <NavLink to="/1" activeClassName="active" className='navMenuBtn'>Your feed</NavLink>
        <NavLink to="/2" activeClassName="active" className='navMenuBtn'>Global feed</NavLink>
        <NavLink to="/3" activeClassName="active" className='navMenuBtn'>Tag feed</NavLink>
      </div>
    </>
  );
}

export default NavMenu;
