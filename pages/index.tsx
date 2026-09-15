import type { NextPage } from 'next';

import Card from '../components/Card';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero name='nathan' colour='#ffcc00' />
      <section id='about' className={styles.introductory}>
        <article>
          <h2>Nathan Bommezijn</h2>
          <p>
            T-shaped front-end developer. I work across design, interaction
            and technology, and go deep on building accessible interfaces for
            the web.
          </p>
        </article>
        <article>
          <h2>Who am I?</h2>
          <p>
            I&apos;m a developer based in Amsterdam with a degree in
            Communication and Multimedia Design from the HvA, and a background
            in application development.
          </p>
        </article>
      </section>
      <section id='projects'>
        <hgroup>
          <h2>Recent projects</h2>
          <p>Recent projects that I have worked on and are worth mentioning.</p>
        </hgroup>
        <div className={styles.highlightProjects}>
          <Card
            title={'Frontend Applications'}
            shortDesc={
              'The final course of a three course program, where we learn about data manipulation, paradigms, and working with frameworks and libraries such as D3.js and React.'
            }
            slug='frontendapplications'
            image={
              'https://user-images.githubusercontent.com/13199349/144448851-54874811-f230-4f70-9220-7ad0a2988cee.gif'
            }
          />
        </div>

        <hgroup>
          <h2>Other projects</h2>
          <p>
            For more projects and code, check out my{' '}
            <a href='https://github.com/bommezijn'>GitHub</a>
          </p>
        </hgroup>
        <div className={styles.highlightProjects}>
          <Card
            title={'Human centered design'}
            shortDesc={
              'A course from my minor where I was designing and developing in an iterative manner for a person with a disability (exclusive design). The requirement for this course was to create something that the client is content with the product.'
            }
            slug='hcd'
            image={
              'https://user-images.githubusercontent.com/13199349/116502427-c0ab5b80-a8b3-11eb-9143-bae6403daf5a.png'
            }
          />
          <Card
            title={'Browser Technologies'}
            shortDesc={
              'Browser Technologies is a course from the minor that I was following and it teaches you about the implementation of progressive enhancement and browser technologies. In this project I wrote a questionnaire that is progressively enhanced and uses the local storage API to store the results in the browser to finish the questionnaire at a later point.'
            }
            slug='brot'
            image={
              'https://user-images.githubusercontent.com/13199349/169404329-2f16f1d1-9f33-482b-9d42-628076382609.png'
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
