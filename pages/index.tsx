import type { NextPage } from 'next';
import Image from 'next/image';
import Card from '../components/Card';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import age from '../utilities/getAge';

import bloom from '../public/bloom.png';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero name="nathan" />
      <section className={styles.introductory}>
        <Image
          alt="some image of my face"
          src={bloom}
          placeholder="blur"
          width={1200}
          height={400}
        />
        <article>
          <p>
            <h2>Nathan Bommezijn</h2>
            Upcoming digital designer whom currently is a student that builds
            things for the web. Currently, I'm focussing on creating accessible
            applications and enhancing my toolbelt.
          </p>
        </article>
      </section>

      <section>
        <h1>About me</h1>
        <p>Who am I? what are my passions</p>
        <p>
          I'm a {age()} year student living in Amersfoort, The Netherlands. I
          have a passion for development and (minimal) design since I was young
          and would like to apply that passion to the web for the rest to see
          and experience.
        </p>
      </section>
      <section>
        <h1>Highlighted projects</h1>
        <p>Projects that I learned the most from</p>

        <p>List overview from projects via github</p>
      </section>
    </div>
  );
};

export default Home;
