import { IconProps } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  imagePath: string;
  imageAltText: string;
  title: string;
  description: string;
  tech?: Array<React.FC<IconProps>>;
}

const ProjectCard: React.FC = ({
  imagePath,
  imageAltText,
  title,
  description,
  tech,
}) => {
  return (
    <div>
      <img src={imagePath} alt={imageAltText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.techStack}>
        {tech.map((Icon: IconProps, index: number) => (
          <Icon key={index} size="1.5rem" />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
