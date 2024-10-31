import styles from './Main.module.css';
import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Interests from '../Interests/Interests';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Full-Stack Web Developer</h1>

      <section className={styles.intro}>
        <Intro></Intro>
      </section>
      <section id="skills" className={styles.skills}>
        <h2>Skills & Technologies</h2>
        <Skills></Skills>
      </section>

      <section id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <Projects></Projects>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <Contact></Contact>
      </section>

      <section id="interests" className={styles.interests}>
        <h2>Interests</h2>
        <Interests></Interests>
      </section>
    </main>
  );
};

export default Main;
