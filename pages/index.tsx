import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <div id='content'>
        <section className={styles.grid} id='projects'>
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
          <header className={styles.introCard}>
            <h3 className={styles.backdrop}>PROJECTS</h3>
            <p>
              The latest curated list of projects in which I have worked on.
              When clicking on the project you will be navigated to the project
              itself.
            </p>
          </header>
          <Card
            title='Actor Popularity Visualisation'
            shortDesc='A data visualisation made with d3.js and an external API for the data.'
            slug='frontend-data'
            image='https://user-images.githubusercontent.com/13199349/142292566-a40c4544-bcff-420b-a116-bb2e332df6bd.gif'
          />
          <Card
            title='Human Centered Design'
            shortDesc='A project where we researched, iterated and developed for people with "disabilities"'
            slug='hcd'
            image='https://user-images.githubusercontent.com/13199349/147109841-6dda85e8-7b1b-4c7c-81d2-17551d88af71.png'
          />
          <Card
            title='Bloom collaboration project'
            shortDesc='A collaboration project where we created a web application for cancer patients that are in remission.'
            slug='bloom'
            image='/bloom.png'
          />
          <Card
            title='KMNI collaboration project'
            shortDesc='Team project where we created a data visualisation to show the correlation between CO2 and COVID-19'
            slug='kmni'
            image='/tropomi.png'
          />
          {/* loop to add X amount of projects with title, desc. photo? */}
        </section>
      </div>
    </main>
  );
};

export default Home;
