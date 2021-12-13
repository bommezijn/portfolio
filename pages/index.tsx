import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/* 
TODO: Convert className to {styles.CLASSNAME}
*/

const Home: NextPage = () => {
  return  (
    <main className={styles.container}>
      <div id="content">
        <section className="grid">
          <article className="intro grid-item">
            <h2 className="name">Nathan Bommezijn</h2>
            <p>Some text</p>
          </article>
          {/* loop to add X amount of projects with title, desc. photo? */}
        </section>
      </div>
      <footer>
        <p>nethen bummezin</p>
        <div className="social">
          <ul>
            <li>logo: social</li>
            <li>logo: social</li>
            <li>logo: social</li>
            <li>logo: social</li>
          </ul>
        </div>
        <form action="" method="post">
          <p>If you wanna contact me tell me with an e-mail or via social media</p>
          <label htmlFor=""><span>name</span><input type="text" name="" id="" required aria-required/></label>
          <label htmlFor=""><input type="email" name="" id="" required /></label>m
          <label htmlFor=""><span>whatcha wanna say</span><input type="textarea" name="" id="" required aria-required /></label>
          <input type="button" value="Send me an e-mail" />
        </form>
        <p>Made with ♥ by <a href="https://github.com/bommezijn">Bommezijn</a></p>
      </footer>
    </main>
  )
}

export default Home