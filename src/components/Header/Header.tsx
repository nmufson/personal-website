import styles from './Header.module.css';
import { useState } from 'react';
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  CloseIcon,
} from '../../../public/assets/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className={styles.header}>
        <p className={styles.name}>
          <span>Nick</span> <span className={styles.secondLine}>Mufson</span>
        </p>
        <nav className={styles.desktopNav}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          onClick={toggleMenu}
          className={`${styles.sideBarButton} ${
            isMenuOpen ? styles.isOpen : ''
          }`}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.isOpen : ''}`}
        >
          <div className={styles.topContainer}>
            <div className={styles.contactContainer}>
              <a
                href="https://www.linkedin.com/in/nicholasmufson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/nmufson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <a href="mailto:nickmufson1@gmail.com" className={styles.email}>
                <EmailIcon />
              </a>
            </div>
            <div onClick={toggleMenu} className={styles.closeWrapper}>
              <CloseIcon></CloseIcon>
            </div>
          </div>
          <nav className={styles.mobileNav}>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
            <a href="#interests" onClick={toggleMenu}>
              Interests
            </a>
          </nav>
        </div>
      </header>
      {isMenuOpen && <div className={styles.backdrop} onClick={toggleMenu} />}
    </>
  );
};

export default Header;
