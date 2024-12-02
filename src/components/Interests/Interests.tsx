import styles from './Interests.module.css';

const Interests = () => {
  return (
    <>
      <div className={styles.interestGroup}>
        <h3>Health & Wellness</h3>
        <p>
          I enjoy strength training and high-intensity cardio (usually
          elliptical or running). I also like to walk and bike around the city,
          which allows me to explore new neighborhoods while remaining active
          outdoors.
        </p>
      </div>
      <div className={styles.interestGroup}>
        <h3>Language Learning</h3>
        <p>
          At the beginning of the year I started learning Spanish. I found out
          about a learning method called Comprehensible Input, which involves
          watching, listening to, or reading content in your target language to
          naturally acquire it over time. The idea really interested me because
          it didn't involve the things I disliked about learning Spanish in
          highschool, like studying grammar or trying to memorize vocabulary.
          I've made a lot of progress and now enjoy listening to Spanish
          podcasts while walking / running errands, typically about philosophy,
          technology, or personal development.
        </p>
      </div>
      <div className={styles.interestGroup}>
        <h3>Other Interests</h3>
        <p>I also enjoy reading, hiking, and techno music.</p>
      </div>
    </>
  );
};

export default Interests;
