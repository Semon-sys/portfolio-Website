import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ProjectFour = () => {
  return (
    <div className="page-container container animate-fade-in">
      <Link to="/" className="back-link">
        &larr; Back to Home
      </Link>
      
      <div className="project-detail-header">
        <h1>FPS Tower Defence & AI Gemini Chatbot</h1>
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
            <span className="meta-value">Unreal Engine 5, C++, Python, Gemini, FAISS</span>
          </div>
        </div>
      </div>

      <div className="project-detail-content glass">
        <div className="project-hero-image-container-detail">
          <img src="./fps_tower_defence.jpg" alt="FPS Tower Defence Game Preview" className="project-detail-image" />
        </div>
        
        <div className="project-text-content">
          <h2>Project Overview</h2>
          <p>
            For my semester-end project at Air University (BS Computer Game Development), I designed and programmed a hybrid **First-Person Shooter (FPS) / Tower Defense game** in **Unreal Engine 5**. The player defends a central power core by shooting enemies directly and placing strategic energy towers to clear waves.
          </p>

          <h2>Gameplay Mechanics & Level Design</h2>
          <ul>
            <li><strong>Weapon Systems:</strong> Programmed physics-based bullets, reload states, and weapon feedback triggers using UE5 Blueprint system and C++.</li>
            <li><strong>Tower AI:</strong> Designed automated defense towers that use trace algorithms to identify, lock onto, and trace enemies, firing projectile lasers.</li>
            <li><strong>Wave Spawning Engine:</strong> Developed a dynamic spawner that escalates threat size, speed, and defense requirements based on core health levels.</li>
          </ul>

          <h2>Retrieval-Augmented Generation (RAG) Chatbot</h2>
          <p>
            To enhance player engagement, I integrated a local game guide database utilizing a **RAG chatbot pipeline**. 
          </p>
          <p>
            I used **Python**, **FAISS (Facebook AI Similarity Search)** vector database, and the **Gemini API** to index game documentation, lore guides, and enemy strengths. The chatbot fetches relevant context fragments using semantic embedding searches and answers player questions instantly with custom text-generation logic.
          </p>

          <h2>Core Technical Takeaways</h2>
          <p>
            Working on this project honed my system architect skills, requiring complex memory optimizations in C++ to handle enemy spawns and tower calculations, combined with Python API wrappers to pipe AI responses.
          </p>

          <h2 style={{ marginTop: '24px' }}>Links</h2>
          <div className="project-links">
            <a href="https://github.com/sairam-abdullah" target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub Repository</a>
            <a href="mailto:1autumn.leaf777@gmail.com" className="btn btn-secondary">Email Inquiries</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFour;
