import styles from './Main.module.css';
import Skills from '../Skills/Skills';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <section id="skills" className={styles.skills}>
        <h2>Skills & Technologies</h2>
        <Skills></Skills>
      </section>

      <section id="projects" className={styles.projects}>
        <h2>Projects</h2>
      </section>

      <section>
        <h2>Interests</h2>
      </section>

      <section id="contact">
        <h2>Interests</h2>
      </section>
    </main>
  );
};

export default Main;
