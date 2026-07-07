import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ProjectTwo = () => {
  return (
    <div className="page-container container animate-fade-in">
      <Link to="/" className="back-link">
        &larr; Back to Home
      </Link>
      
      <div className="project-detail-header">
        <h1>Games Information Website</h1>
        <div className="project-meta glass">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">Backend Developer</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">4 Weeks</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Tech Stack</span>
            <span className="meta-value">HTML, PHP, MySQL, CSS</span>
          </div>
        </div>
      </div>

      <div className="project-detail-content glass">
        <div className="project-hero-image-container-detail">
          <img src="./games_info_website.jpg" alt="Games Info Website Screen" className="project-detail-image" />
        </div>
        
        <div className="project-text-content">
          <h2>Project Overview</h2>
          <p>
            The <strong>Games Information Website</strong> is a database-driven game encyclopedia library catalog. I designed the database schema, built the backend retrieval operations in PHP, and created clean, functional user interfaces in HTML and CSS.
          </p>

          <h2>Core Features</h2>
          <ul>
            <li><strong>Relational Database:</strong> Designed a structured MySQL schema linking game information, developers, release timelines, genres, and user rating profiles.</li>
            <li><strong>Search and Filter Engine:</strong> Built query-processing filters in PHP that execute parameterized SQL searches, preventing SQL injection vulnerabilities.</li>
            <li><strong>Dynamic Content Loading:</strong> Programmed logic to fetch records from database tables and render cards dynamically on browser clients.</li>
          </ul>

          <h2>Development Hurdles Solved</h2>
          <p>
            A primary challenge was managing complex relational database joins efficiently. I optimized table indexes and query structures to keep load times short, ensuring catalog data lists render instantly.
          </p>

          <h2 style={{ marginTop: '24px' }}>Links</h2>
          <div className="project-links">
            <a href="https://github.com/Semon-sys" target="_blank" rel="noreferrer" className="btn btn-primary">GitHub Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
