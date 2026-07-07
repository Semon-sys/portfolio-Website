import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          Sairam <span className="text-gradient">Abdullah</span>
        </Link>
        <div className="nav-links">
          {!isHome && <Link to="/" className="nav-link">Home</Link>}
          <a href="https://github.com/Semon-sys" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          <a href="https://www.linkedin.com/in/sairam-abdullah-8b806b287/" target="_blank" rel="noreferrer" className="nav-link btn btn-primary">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
