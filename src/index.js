import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './index.scss';
import Navbar from './components/Navbar';
import Podcast from './pages/Podcast';
import Shows from './pages/Shows';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/shows" element={<Shows />} />
    </Routes>
  </BrowserRouter>
);
