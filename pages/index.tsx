import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className={styles.container}>
        <div id='content'>
          <section className={styles.grid}>
            <article className={`${styles.intro} ${styles.gridItem}`}>
              <div className={styles.titleContainer}>
                <h2>Nathan Bommezijn</h2>
                <p>Digital Designer</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo reprehenderit eveniet ducimus odit debitis nostrum hic
                quam quae est alias? Debitis ex, vel nulla impedit iusto illo
                repudiandae harum consequuntur!
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
    </>
  );
};

export default Home;
