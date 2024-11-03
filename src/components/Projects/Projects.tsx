import styles from './Projects.module.css';
import projects from './projectData';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Projects;
