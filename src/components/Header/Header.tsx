import React from 'react';
import styles from './Header.module.css';
import { useState } from 'react';
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  CloseIcon,
} from '../../../public/assets/icons';

// do i need this if no props?
const Header: React.FC = () => {
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
          {!isMenuOpen ? '☰' : <CloseIcon />}
        </button>

        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.isOpen : ''}`}
        >
          <nav className={styles.mobileNav}>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#interests" onClick={toggleMenu}>
              Interests
            </a>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </nav>
          <div className={styles.contactContainer}>
            {/* target blank for new tab */}
            {/* rel for security */}
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
        </div>
      </header>
      {isMenuOpen && <div className={styles.backdrop} onClick={toggleMenu} />}
    </>
  );
};

export default Header;
