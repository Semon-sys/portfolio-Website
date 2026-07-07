import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ProjectThree = () => {
  return (
    <div className="page-container container animate-fade-in">
      <Link to="/" className="back-link">
        &larr; Back to Home
      </Link>
      
      <div className="project-detail-header">
        <h1>Esports Tournament Website</h1>
        <div className="project-meta glass">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">Frontend Developer</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">3 Weeks</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Tech Stack</span>
            <span className="meta-value">HTML5, CSS3, JavaScript</span>
          </div>
        </div>
      </div>

      <div className="project-detail-content glass">
        <div className="project-hero-image-container-detail">
          <img src="./esports_website.jpg" alt="Esports Website Screen" className="project-detail-image" />
        </div>
        
        <div className="project-text-content">
          <h2>Project Overview</h2>
          <p>
            Designed and built for esports fans and organizers, the <strong>Esports Tournament Website</strong> is an esports-themed portal. The focus was to present upcoming match schedules, team brackets, standings, and tournaments in a clean, highly structured frontend.
          </p>

          <h2>Key Deliverables</h2>
          <ul>
            <li><strong>Responsive Schedules:</strong> Configured flexible grid systems that adapt standing matrices, fixture details, and details across desktop and mobile screens.</li>
            <li><strong>Dynamic Standing Tables:</strong> Programmed JavaScript logic to parse match outcomes, update points, and re-order team listings dynamically.</li>
            <li><strong>Optimized Rendering:</strong> Relied strictly on lightweight, pure HTML and CSS layouts to ensure page render times are short.</li>
          </ul>

          <h2>Layout and UX Strategy</h2>
          <p>
            I crafted the layout using modern flexbox patterns to structure brackets cleanly, ensuring user readability. Interactivity is powered by vanilla JavaScript to keep the load-weight minimal, making it an excellent candidate for fast, static deployment.
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

export default ProjectThree;
