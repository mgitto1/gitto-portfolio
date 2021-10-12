import React, { useState } from 'react';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      title: 'Test of Strength',
      logo: 'assets/muscle.png',
      img: 'assets/ToS-min.png',
      description:
        'Leveraged TensorflowJS and Posenet in order to build a React application that utilizes a webcam to track repetitions in a workout, record progress to a user dashboard, and show statistics comparing the user to other users across the world.',
      video: 'https://youtu.be/HZIF9rtnvT8',
      github: 'https://github.com/mgitto1/test-of-strength',
      site: 'https://www.testofstrength.app',
    },
    {
      title: 'Solve.It',
      logo: 'assets/lightbulb.png',
      img: 'assets/SolveIt-min.png',
      description:
        'Developed a platform with a coding environment built using Docker, where users can come to post bugs in their code along with a price they would pay to have it solved - other users can solve these bugs and sandbox using the in-platform coding environment.',
      video: 'https://youtu.be/HZIF9rtnvT8',
      github: 'https://github.com/Team-Neptune-FSA/solve-it',
    },
    {
      title: 'Grace Topper',
      img: 'assets/Grace-topper-min.png',
      logo: 'assets/hat-min.png',
      description:
        'Developed an e-commerce platform utilizing React and Redux, where users were able to have a seamless shopping experience as both a guest user and a member of the site.',
      github: 'https://github.com/FSA-Team-Haskell/grace-toppers-project',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1 className="titleText">Featured Projects</h1>
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
                    <img src={d.logo} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  {d.site ? (
                    <span>
                      <a href={d.site}>Try it out</a>
                    </span>
                  ) : (
                    ''
                  )}
                  {d.video ? (
                    <span>
                      <a href={d.video}>Video Demo</a>
                    </span>
                  ) : (
                    ''
                  )}
                  <span>
                    <a href={d.github}>Github</a>
                  </span>
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
