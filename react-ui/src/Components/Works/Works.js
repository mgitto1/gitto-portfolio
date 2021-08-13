import React, { useState } from 'react';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      title: 'Test of Strength',
      img: 'assets/ToS.png',
      description: 'A site where you get big',
    },
    {
      title: 'Grace Topper',
      img: 'assets/ToS.png',
      description: 'Snazzy hat emporium',
    },
    {
      title: 'Solve.It',
      img: 'assets/SolveIt.png',
      description: 'Where you go to solve your problems',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src="assets/logo192.png" alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <span>Demo</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="ToS" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/downarrow.png"
        className="arrow left"
        alt="arrow"
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/downarrow.png"
        className="arrow right"
        alt="arrow"
        onClick={() => handleClick('right')}
      />
    </div>
  );
}
