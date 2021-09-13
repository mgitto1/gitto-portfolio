import React, { useState } from 'react';
//import DarkModeToggle from 'react-dark-mode-toggle';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  // const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Intro</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Featured Projects</a>
        </li>
      </ul>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} /> */}
    </div>
  );
}
