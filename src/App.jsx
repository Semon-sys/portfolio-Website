import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-1" element={<ProjectOne />} />
        <Route path="/project-2" element={<ProjectTwo />} />
        <Route path="/project-3" element={<ProjectThree />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
