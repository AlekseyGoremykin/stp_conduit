import React from 'react';
import './header.css'
import {Link} from "react-router-dom";

function Header() {

  return (
    <>
      <div className="headerWrapper">
        <Link to="/" className="logo">conduit</Link>
        <div>
          <Link to="/" className="link">Home</Link>
          <Link to="/create-article" className="link">New article</Link>
          <Link to="/sign-in" className="link">Sign in</Link>
          <Link to="/sign-up" className="link">Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
