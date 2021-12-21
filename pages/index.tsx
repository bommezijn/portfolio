import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <div id='content'>
        <section className={styles.grid}>
          <article className={`${styles.intro}`}>
            <div className={styles.titleContainer}>
              <h2 className={styles.yellowGradient}>Nathan Bommezijn</h2>
              <p>Digital Designer</p>
            </div>
            <p className={styles.lead}>
              Upcoming digital designer whom currently is a student that builds
              things for the web. Currently, I&apos;m focussing on creating
              <span> accessible applications and creative coding.</span>
            </p>
          </article>
          <Card title='tete' shortDesc='kekeke' slug='init' />
          <Card title='tete' shortDesc='kekeke' slug='niti' />
          <Card title='tete' shortDesc='kekeke' slug='itin' />
          <Card title='tete' shortDesc='kekeke' slug='tini' />
          {/* loop to add X amount of projects with title, desc. photo? */}
        </section>
      </div>
    </main>
  );
};

export default Home;
