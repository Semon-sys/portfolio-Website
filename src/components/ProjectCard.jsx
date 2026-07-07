import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ id, title, description, image, tags }) => {
  return (
    <div className="project-card glass">
      <div className="project-image-container">
        {image ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <span>{title} Preview</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <Link to={`/project-${id}`} className="btn btn-primary btn-full">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
