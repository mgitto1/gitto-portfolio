import React, { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import { testOfStength, graceTopper, solveIt } from '../../data.js';
import './portfolio.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState('tos');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'tos',
      title: 'Test of Strength',
    },
    {
      id: 'solve',
      title: 'Solve.It',
    },
    {
      id: 'topper',
      title: 'Grace Toppers',
    },
  ];
  useEffect(() => {
    switch (selected) {
      case 'tos':
        setData(testOfStength);
        break;
      case 'solve':
        setData(solveIt);
        break;
      case 'topper':
        setData(graceTopper);
        break;
      default:
        setData(testOfStength);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <>
            <div className="left">
              <div className="item">
                <img src={d.img} alt="Screenshot of site" />
                <h3>Demo</h3>
              </div>
            </div>
            <div className="right">
              <div className="description">
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
