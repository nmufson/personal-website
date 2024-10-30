import { IconProps } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  imagePath: string;
  imageAltText: string;
  title: string;
  description: string;
  tech: Array<React.FC<IconProps>>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imagePath,
  imageAltText,
  title,
  description,
  tech,
}) => {
  return (
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
  );
};

export default ProjectCard;
