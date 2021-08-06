import React from 'react'
import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#works">Works</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

    </div>
  )
}
