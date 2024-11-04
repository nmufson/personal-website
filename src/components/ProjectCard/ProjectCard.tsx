import { ProjectProps } from '../../types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  imagePath,
  imageAltText,
  title,
  description,
  tech,

  gitHubLink,
  livePreviewLink,
}: ProjectProps) => {
  return (
    <div className={styles.projectCard}>
      <img src={imagePath} alt={imageAltText} />
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <div className={styles.linkContainer}>
          <p>
            <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </p>
          <p>
            <a href={livePreviewLink} target="_blank" rel="noopener noreferrer">
              View Live Site
            </a>
          </p>
        </div>
        <p>{description}</p>
        <div className={styles.techStack}>
          {tech.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
