import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ProjectOne = () => {
  return (
    <div className="page-container container animate-fade-in">
      <Link to="/" className="back-link">
        &larr; Back to Home
      </Link>
      
      <div className="project-detail-header">
        <h1>Dead Man's Dock</h1>
        <div className="project-meta glass">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">Game Developer & AI Engineer</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">8 Weeks (Academic)</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Tech Stack</span>
            <span className="meta-value">Unreal Engine 5, C++, Python, Gemini API, FAISS</span>
          </div>
        </div>
      </div>

      <div className="project-detail-content glass">
        <div className="project-hero-image-container-detail">
          <img src="./dead_mans_dock.png" alt="Dead Man's Dock Main Menu Screen" className="project-detail-image" />
        </div>
        
        <div className="project-text-content">
          <h2>Project Overview</h2>
          <p>
            Developed as a major semester-end project for my Bachelor of Science in Computer Game Development at Air University, <strong>Dead Man's Dock</strong> is a hybrid First-Person Shooter (FPS) and Tower Defense game built in <strong>Unreal Engine 5</strong>. The player is placed in a coastal docks environment and tasked with defending structural energy hubs from oncoming waves of cybernetic enemies.
          </p>

          <h2>Gameplay Mechanics & Level Design</h2>
          <ul>
            <li><strong>FPS Control System:</strong> Programmed responsive weapon mechanics, ammunition states, bullet projectile calculations, and reloading feedback structures in C++ and Blueprints.</li>
            <li><strong>Automated Tower AI:</strong> Designed defense towers that scan the zone for targets, lock on, and fire laser streams using path trace algorithms.</li>
            <li><strong>Wave Generation:</strong> Built spawn control logic that scales spawn count, enemy attributes, and paths based on defense metrics.</li>
          </ul>

          <h2>Retrieval-Augmented Generation (RAG) Chatbot</h2>
          <p>
            To guide players through game mechanics and lore, I built and integrated a localized RAG chatbot pipeline:
          </p>
          <ul>
            <li><strong>Knowledge Indexing:</strong> Structured markdown documents detailing game rules, tower profiles, and enemy weaknesses.</li>
            <li><strong>Vector Search:</strong> Used Python and FAISS (Facebook AI Similarity Search) to perform semantic vector match retrieval on user queries.</li>
            <li><strong>AI Pipeline:</strong> Configured the Gemini API to take the matching reference paragraphs and construct accurate, custom responses.</li>
          </ul>

          <h2>Technical Takeaways</h2>
          <p>
            This project demonstrated my ability to integrate complex low-level game loops (built in C++ / UE5) with external data-rich backend systems (Python vector database APIs) to create an engaging experience.
          </p>

          <h2 style={{ marginTop: '24px' }}>Links</h2>
          <div className="project-links">
            <a href="https://github.com/Semon-sys" target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
