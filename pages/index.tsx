import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/* 
TODO: Convert className to {styles.CLASSNAME}
*/

const Home: NextPage = () => {
  return (
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
    </main>
  )
}

export default Home