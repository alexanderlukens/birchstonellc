import React from 'react';
import logo from '../img/birchstone_dark.png';
import { HashLink as Link } from 'react-router-hash-link';



const Navbar = () => {
  return (
    <nav className="birchstone-color">
      <div className="nav-wrapper">
        <a href="" className="brand-logo left"><img src={logo}/></a>
        <a href="#" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#news">News</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
