import React from 'react';
import styles from './Interests.module.css';

const Interests: React.FC = () => {
  return (
    <>
      <div className={styles.interestGroup}>
        <h3>Health & Wellness</h3>
        <p>
          I enjoy strength training and high-intensity cardio. I also like to
          walk and bike around the city, which allows me to explore new
          neighborhoods while remaining active outdoors.
        </p>
      </div>
      <div className={styles.interestGroup}>
        <h3>Language Learning</h3>
        <p>
          I've been learning Spanish for eight months and recently added German
          into the mix. I use the Comprehensible Input method, which involves
          listening to, watching, or reading native content at an understandable
          level. This makes the process more entertaining and natural as I get
          to consume interesting content relating to philosophy, technology, and
          local culture while also learning the language.
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
