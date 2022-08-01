import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styles from './style.module.css';

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.social}>
        <hgroup>
          <h3>Resume && Socials</h3>
          <p></p>
        </hgroup>
        <ul>
          <li>
            <Link href='https://read.cv/nb' passHref={true}>
              <a>resume</a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/bommezijn' passHref={true}>
              <a>Github</a>
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/nbmbp/' passHref={true}>
              <a>LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link href='mailto:nathanbommezijn@gmail.com' passHref={true}>
              <a>email me</a>
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.outro}>
        powered ⚡️ by <a href='https://github.com/bommezijn'>Nathan</a>
      </p>
    </footer>
  );
};

export default Footer;
