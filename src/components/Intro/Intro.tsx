import styles from './Intro.module.css';
const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <img src="/assets/Mufson-photo.jpg" alt="" />
        <h2>
          I'm Nick, a full-stack developer based in NYC who is passionate about
          building new web applications and solving complex problems.
        </h2>
      </div>
    </>
  );
};

export default Intro;
