import { ProjectProps } from '../../types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  imagePath,
  imageAltText,
  title,
  description,
  tech,
  link,
}: ProjectProps) => {
  return (
    <a href={link} target="_blank">
      <div className={styles.projectCard}>
        <img src={imagePath} alt={imageAltText} />
        <div className={styles.projectInfo}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.techStack}>
            {tech.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
