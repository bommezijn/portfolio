import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const NavBar: FunctionComponent = () => {
  return (
    <nav className={`${styles.navBar} ${styles.mildShadow}`}>
      <ul>
        <Link passHref href='/'>
          <li>Bommezijn</li>
        </Link>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
