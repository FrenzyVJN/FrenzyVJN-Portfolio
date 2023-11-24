import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Help from './backup'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Help />} />
        <Route path="/home1" element={<Help />} />
        <Route path="/about" element={<Help />} />
        <Route path="/projects" element={<Help />} />
        <Route path="*" element={<Help />} />
      </Routes>
    </Router>
  );
}
