import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Timeline from './Components/Timeline/Timeline';
import './app.scss';
import { useState } from 'react';
import Menu from './Components/Menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
      </div>
      top sec -intro -portfolio -
    </div>
  );
}

export default App;
