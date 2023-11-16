import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Help from './backup'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Help />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
