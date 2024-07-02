import react from 'react'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Podcast from './components/Podcast';
import Forum from './components/Forum';
import Help from './components/Help';
import About from './components/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
