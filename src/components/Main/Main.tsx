import styles from './Main.module.css';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Intro from '../Intro/Intro';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1>Full-Stack Web Developer</h1>

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

      <section className={styles.interests}>
        <h2>Interests</h2>
        <div>
          <h3>Health & Wellness</h3>
          <p>
            I enjoy strength training and high-intensity cardio. I also like to
            walk and bike around the city, which allows me to explor new
            neighborhoods while remaining active outdoors.
          </p>
        </div>
        <div>
          <h3>Language Learning</h3>
          <p>
            I've been learning Spanish for eight months and recently added
            German. I use the Comprehensible Input method, which involves
            listening to, watching, or reading native content at an
            understandable level.
          </p>
        </div>
        <div className={styles.interestGroup}>
          <h3>Other Interests</h3>
          <p>I also enjoy reading, hiking, and techno music.</p>
        </div>
        <p></p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
      </section>
    </main>
  );
};

export default Main;
