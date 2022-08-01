import type { NextPage } from 'next';
import Image from 'next/image';
import Card from '../components/Card';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import age from '../utilities/getAge';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero name="nathan" colour="#ffcc00" />
      <section id="about" className={styles.introductory}>
        <article>
          <p>
            <h2>Nathan Bommezijn</h2>
            Upcoming digital designer whom currently is a student that builds
            things for the web. Currently, I'm focussing on creating accessible
            applications and enhancing my toolbelt.
          </p>
        </article>
        <article>
          <h2>Who am I?</h2>
          <p>
            I'm a {age()} year student living in Amersfoort, The Netherlands. I
            have a passion for development and (minimal) design since I was
            young and would like to apply that passion to the web for the rest
            to see and experience.
          </p>
        </article>
      </section>
      <section id="projects">
        <hgroup>
          <h1>Recent projects</h1>
          <p>Recent projects that I have worked on and are worth mentioning.</p>
        </hgroup>
        <div className={styles.highlightProjects}>
          <Card
            title={'CMD Mid Term Accreditatie'}
            shortDesc={
              'The final project for the minor I was following, here we had to create a web-app that works with a headless CMS and a frontend application of our choosing, the team and I decided to go for NUXT.js. The requirement for the application was that it was accessible and readable for all future readers.'
            }
            slug="midtermacc"
            image={
              'https://raw.githubusercontent.com/KaivWezel/cmda-mid-term/main/Assets%20rm/Header-readme.jpg'
            }
          />
          <Card
            title={'Frontend Applications'}
            shortDesc={
              'The final course of a three course program, where we learn about data manipulation, paradigms, and working with frameworks and libraries such as D3.js and React.'
            }
            slug="frontendapplications"
            image={
              'https://user-images.githubusercontent.com/13199349/144448851-54874811-f230-4f70-9220-7ad0a2988cee.gif'
            }
          />
        </div>

        <hgroup>
          <h1>Other projects</h1>
          <p>
            For more projects and code, check out my{' '}
            <a href="github.com/bommezijn">github</a>
          </p>
        </hgroup>
        <div className={styles.highlightProjects}>
          <Card
            title={'Human centered design'}
            shortDesc={
              'A course from my minor where I was designing and developing in an iterative manner for a person with a disability (exclusive design). The requirement for this course was to create something that the client is content with the product.'
            }
            slug="hcd"
            image={
              'https://user-images.githubusercontent.com/13199349/116502427-c0ab5b80-a8b3-11eb-9143-bae6403daf5a.png'
            }
          />
          <Card
            title={'Browser Technologies'}
            shortDesc={
              'Browser Technologies is a course from the minor that I was following and it teaches you about the implementation of progressive enhancement and browser technologies. In this project I wrote a questionnaire that is progressively enhanced and uses the local storage API to store the results in the browser to finish the questionnaire at a later point.'
            }
            slug="brot"
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
