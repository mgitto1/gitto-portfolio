import React from 'react';
import './navbar.scss';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Me.
          </a>
          <div className="itemContainer">
            <PhoneIphoneIcon className="icon"/>
            <span>(516) 376-1185</span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon"/>
            <span>matthew.gitto1@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
