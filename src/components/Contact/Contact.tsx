import styles from './Contact.module.css';
import { LinkedInIcon, EmailIcon } from '../../../public/assets/icons';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <p>
        Have a question or interested in collaborating? Please reach out over
        email or LinkedIn!
      </p>
      <div className={styles.infoContainer}>
        <a
          href="mailto:nickmufson1@gmail.com"
          className={styles.emailContainer}
        >
          <EmailIcon />
          nickmufson1@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/nicholasmufson/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedInContainer}
        >
          <LinkedInIcon />
          linkedin.com/in/nicholasmufson/
        </a>
      </div>
    </div>
  );
};

export default Contact;
