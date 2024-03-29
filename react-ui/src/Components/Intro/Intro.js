import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ['Engineer', 'Developer', 'Designer'],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/matt_portfolio.png" alt="Matthew Gitto" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Matt Gitto</h1>
          <h3>
            Aspiring <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <img src="assets/downarrow.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
