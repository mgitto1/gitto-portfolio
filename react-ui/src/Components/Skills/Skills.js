import React, { useState } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ComputerIcon from '@material-ui/icons/Computer';
import './skills.scss';
import BuildIcon from '@material-ui/icons/Build';
import CreateIcon from '@material-ui/icons/Create';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Skills() {
  const [activeDrop, setActiveDrop] = useState(0);

  return (
    <section className="skills" id="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="skills-content">
        <div className="left">
          <div className="text">About my creative skills & experiences.</div>
          <div className="skills-description">
            <p>
              Drawing from my analytical skills as a CPA and my creativity as a
              musician, software engineering seemed like the next logical step
              in my life. My desire to bridge these analytical skills with my
              passion for creating something impactful led me to learn to code.
              The more I came to understand the power of coding, the more I came
              to love it. I am continuously refining my skills with the
              ultimately goal of building applications that improve the lives of
              everyday people. Currently I am looking for an opportunity to
              start my new career as a software engineer.
            </p>
          </div>
          <div>
            <a
              download
              href="assets/Matthew_Gitto_Resume.pdf"
              className="button"
            >
              Download Resume
              <GetAppIcon style={{ color: 'black' }} />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="content_container">
            <div className={'list_item ' + (activeDrop === 1 ? 'active' : '')}>
              <div className="skills_header">
                <LanguageIcon style={{ marginRight: 10, color: 'brown' }} />
                <h2 className="skills_title">Languages</h2>
                <img
                  className={'down_arrow ' + (activeDrop === 1 ? 'active' : '')}
                  src="assets/downarrow.png"
                  alt="down_arrow"
                  onClick={() =>
                    activeDrop === 1 ? setActiveDrop(0) : setActiveDrop(1)
                  }
                />
              </div>
              <div className={'content ' + (activeDrop === 1 ? 'active' : '')}>
                <ul>
                  <li>
                    <img src="assets/js.png" alt="JS logo" />
                    <p>Javascript</p>
                  </li>
                  <li>
                    <img src="assets/css.png" alt="JS logo" />
                    <p>CSS</p>
                  </li>
                  <li>
                    <img src="assets/html.png" alt="JS logo" />
                    <p>HTML</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={'list_item ' + (activeDrop === 2 ? 'active' : '')}>
              <div className="skills_header">
                <ComputerIcon style={{ marginRight: 10, color: 'brown' }} />
                <h2 className="skills_title">Databases</h2>
                <img
                  className={'down_arrow ' + (activeDrop === 2 ? 'active' : '')}
                  src="assets/downarrow.png"
                  alt="down_arrow"
                  onClick={() =>
                    activeDrop === 2 ? setActiveDrop(0) : setActiveDrop(2)
                  }
                />
              </div>
              <div className={'content ' + (activeDrop === 2 ? 'active' : '')}>
                <ul>
                  <li>
                    <img src="assets/postgresql.png" alt="JS logo" />
                    <p>PostgreSQL</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={'list_item ' + (activeDrop === 3 ? 'active' : '')}>
              <div className="skills_header">
                <BuildIcon style={{ marginRight: 10, color: 'brown' }} />
                <h2 className="skills_title">Tools & Technologies</h2>
                <img
                  className={'down_arrow ' + (activeDrop === 3 ? 'active' : '')}
                  src="assets/downarrow.png"
                  alt="down_arrow"
                  onClick={() =>
                    activeDrop === 3 ? setActiveDrop(0) : setActiveDrop(3)
                  }
                />
              </div>
              <div className={'content ' + (activeDrop === 3 ? 'active' : '')}>
                <ul>
                  <li>
                    <img src="assets/js-icon-13.jpeg" alt="JS logo" />
                    <p>Node.js</p>
                  </li>
                  <li>
                    <img src="assets/logo192.png" alt="JS logo" />
                    <p>React</p>
                  </li>
                  <li>
                    <img src="assets/redux.png" alt="JS logo" />
                    <p>Redux</p>
                  </li>
                  <li>
                    <img src="assets/ex.png" alt="JS logo" />
                    <p>Express</p>
                  </li>
                  <li>
                    <img src="assets/docker.png" alt="JS logo" />
                    <p>Docker</p>
                  </li>
                  <li>
                    <img src="assets/tensorflow.png" alt="JS logo" />
                    <p>TensorflowJS</p>
                  </li>
                  <li>
                    <img src="assets/sequelize-icon.png" alt="JS logo" />
                    <p>Sequelize</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={'list_item ' + (activeDrop === 4 ? 'active' : '')}>
              <div className="skills_header">
                <CreateIcon style={{ marginRight: 10, color: 'brown' }} />
                <h2 className="skills_title">Design</h2>
                <img
                  className={'down_arrow ' + (activeDrop === 4 ? 'active' : '')}
                  src="assets/downarrow.png"
                  alt="down_arrow"
                  onClick={() =>
                    activeDrop === 4 ? setActiveDrop(0) : setActiveDrop(4)
                  }
                />
              </div>
              <div className={'content ' + (activeDrop === 4 ? 'active' : '')}>
                <ul>
                  <li>
                    <img src="assets/figma.png" alt="JS logo" />
                    <p>Figma</p>
                  </li>
                  <li>
                    <img src="assets/tableau.png" alt="JS logo" />
                    <p>Tableau</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
