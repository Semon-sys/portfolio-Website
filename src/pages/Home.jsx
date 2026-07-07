import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Dead Man's Dock - FPS Tower Defence",
      description: "A hybrid First-Person Shooter and Tower Defense game built in Unreal Engine 5, integrated with an AI-driven Gemini & FAISS RAG chatbot to answer player queries in real-time.",
      tags: ["Unreal Engine 5", "C++", "Gemini AI", "RAG Chatbot"],
      image: "./dead_mans_dock.png"
    },
    {
      id: 2,
      title: "Games Information Website",
      description: "A dynamic database-driven gaming library catalog website built with HTML, PHP, and MySQL, featuring user query interfaces and clean data integrations.",
      tags: ["HTML", "PHP", "MySQL", "Database"],
      image: "./games_info_website.jpg"
    },
    {
      id: 3,
      title: "Esports Tournament Website",
      description: "A fully responsive, esports-themed tournament schedule and match display website developed using semantic HTML, CSS, and modern JavaScript.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "./esports_website.jpg"
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      
      {/* Ambient Background Elements */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-left animate-fade-in">
            <span className="badge badge-cyan">
              BS Computer Game Development Student
            </span>
            <h1 className="hero-title" style={{ marginTop: '12px' }}>
              Sairam Abdullah
            </h1>
            <p className="hero-subtitle">
              Unreal Engine developer and web engineer. Reconciling high-performance game logic with structured, responsive front-ends. Leveraging specialized experience from my Web Development Internship at <span className="text-gradient">SafeX Solutions</span>.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explore Work &rarr;</a>
              <a href="https://github.com/Semon-sys" target="_blank" rel="noreferrer" className="btn btn-secondary">&lt;&gt; GitHub</a>
              <a href="https://www.linkedin.com/in/sairam-abdullah-8b806b287/" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
            </div>
          </div>

          {/* Right Column (Info Card) */}
          <div className="hero-right animate-fade-in">
            <div className="info-card glass">
              
              <div className="info-group">
                <span className="info-label">Location</span>
                <span className="info-value">Islamabad, Pakistan</span>
              </div>

              <div className="info-group">
                <span className="info-label">Education</span>
                <span className="info-value">BS in Computer Game Development</span>
                <span className="info-subtext">Air University (4th Semester, 2024-2028)</span>
              </div>

              <div className="info-group">
                <span className="info-label">Internship Spotlight</span>
                <span className="info-value text-gradient">SafeX Solutions</span>
                <span className="info-subtext">Website Development Intern</span>
                <a href="https://safexsolutions.com" target="_blank" rel="noreferrer" className="info-link">safexsolutions.com &nearr;</a>
              </div>

              <div className="info-group">
                <span className="info-label">Contact Details</span>
                <span className="info-value" style={{ fontSize: '0.9rem' }}>1autumn.leaf777@gmail.com</span>
                <span className="info-subtext">Instagram: @sairam._.1 | +92-310-7607096</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section container animate-fade-in">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        <div className="about-content glass">
          <p>
            I am a Computer Game Development student at Air University, Islamabad, combining heavy system programming logic with modern full-stack web engineering. My technical foundation spans building custom game mechanics in <strong>C++</strong> and <strong>Unreal Engine 5</strong>, as well as database-driven web platforms.
          </p>
          <p>
            During my internship at <strong>SafeX Solutions</strong>, I focused on website development, working on corporate site modernization, clean UI/UX components, and building client portal modules. This experience helped me refine my abilities in writing highly optimized code, improving page speed scores, and delivering sleek, interactive web interfaces.
          </p>
          <p>
            Additionally, I have experience working with Fiverr clients on SEO keyword research and content optimizations, as well as creative video and photo editing using Adobe Premiere and Photoshop.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section container animate-fade-in">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Explore some of the systems and tools I built during my academic semesters and personal work</p>
        </div>
        <div className="projects-stack">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section container animate-fade-in">
        <div className="section-header">
          <h2>My Skills</h2>
          <p>Technologies, programming frameworks, and design applications I use</p>
        </div>
        
        <div className="skills-categories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '30px' }}>
          
          <div className="skills-category-card glass" style={{ padding: '24px' }}>
            <h3 className="text-gradient">Programming</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              {["C++", "Python", "Java", "HTML5 & CSS3", "PHP", "MySQL"].map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-category-card glass" style={{ padding: '24px' }}>
            <h3 className="text-gradient-cyan">Game Development</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              {["Unreal Engine 5", "Game Design", "Gameplay Systems", "C++ Mechanics", "Blueprint Scripting"].map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-category-card glass" style={{ padding: '24px' }}>
            <h3 className="text-gradient-purple">Marketing & Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              {["Website SEO", "Keyword Research", "Fiverr Freelancing", "Cisco Packet Tracer", "Tshark / Wireshark"].map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-category-card glass" style={{ padding: '24px' }}>
            <h3 style={{ color: 'var(--text-primary)' }}>Creative & Media</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              {["Adobe Photoshop", "Adobe Premiere Pro", "Photo Editing", "Video Production", "UI/UX Prototyping"].map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect-section container animate-fade-in">
        <div className="section-header">
          <h2>Let's Collaborate</h2>
          <p>Interested in game development, full-stack systems, or SEO optimizations? Let's get in touch.</p>
        </div>
        <div className="connect-links">
          <a href="https://www.linkedin.com/in/sairam-abdullah-8b806b287/" target="_blank" rel="noreferrer" className="btn btn-primary connect-btn">
            LinkedIn Profile
          </a>
          <a href="https://github.com/Semon-sys" target="_blank" rel="noreferrer" className="btn btn-secondary connect-btn">
            GitHub Profile
          </a>
          <a href="https://www.instagram.com/sairam._.1/" target="_blank" rel="noreferrer" className="btn btn-secondary connect-btn">
            Instagram: @sairam._.1
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
