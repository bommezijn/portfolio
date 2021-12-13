import React, { FunctionComponent } from "react";
import styles from './style.module.css'


const NavBar: FunctionComponent = () => {
  return (
    <nav className={`${styles.navBar} ${styles.mildShadow}`}>
    <ul>
      <li>Bommezijn</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </nav>
  )
}

export default NavBar