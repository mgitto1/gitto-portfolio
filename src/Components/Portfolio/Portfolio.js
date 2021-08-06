import React from 'react';
import './portfolio.scss';

export default function Portfolio() {
  return (
  <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      <li className="active">Featured</li>
      <li>Web App</li>
      <li>Mobile App</li>
      <li>Design</li>
      <li>Branging</li>
    </ul>
    <div className="container">
      <div className="item">
        <img src="assets/logo192.png" alt="placeholder" />
        <h3>App</h3>
      </div>
    </div>
  </div>
  )
}
