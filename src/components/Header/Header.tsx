import React from 'react';
import styles from './Header.module.css';

// do i need this if no props?
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/assets/Mufson-photo.jpg" alt="" />
      <h1>Nick Mufson</h1>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
