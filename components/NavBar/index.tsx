import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const NavBar: FunctionComponent = () => {
  return (
    <nav className={`${styles.navBar} ${styles.mildShadow}`}>
      <ul>
        <Link href="/" passHref>
          <li>
            <a>Bommezijn</a>
          </li>
        </Link>
        <li className={styles.linkItem}>
          <a href="#about">About</a>
        </li>
        <li className={styles.linkItem}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.linkItem}>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
