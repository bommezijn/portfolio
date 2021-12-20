import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const NavBar: FunctionComponent = () => {
  return (
    <nav className={`${styles.navBar} ${styles.mildShadow}`}>
      <ul>
        <Link href='/' passHref>
          <li>
            <a>Bommezijn</a>
          </li>
        </Link>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
