import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import styles from './style.module.css'

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <p>nethen bummezin</p>
      <div className='social'>
        <ul>
          <li>
            <Link href='https://read.cv/nb' passHref={true}><a>resume</a></Link>
          </li>
          <li>
            <Link href='https://github.com/bommezijn' passHref={true}><a>Github</a></Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/nbmbp/' passHref={true}><a>LinkedIn</a></Link>
          </li>
        </ul>
      </div>
      <form action='' method='post'>
        <p>If you wanna contact me tell me with an e-mail or via social media</p>
        <label htmlFor=''><span>name</span><input type='text' name='' id='' required aria-required /></label>
        <label htmlFor=''><input type='email' name='' id='' required /></label>m
        <label htmlFor=''><span>whatcha wanna say</span><input type='textarea' name='' id='' required aria-required /></label>
        <input type='button' value='Send me an e-mail' />
      </form>
      <p className={styles.outro}>Made with ♥ by <a href='https://github.com/bommezijn'>Nathan</a></p>
    </footer>
  )
}

export default Footer