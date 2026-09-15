import type { GetStaticProps, NextPage } from 'next';

import Card from '../components/Card';
import Hero from '../components/Hero';
import { getAllProjects, ProjectMeta } from '../lib/projects';
import styles from '../styles/Home.module.css';

type HomeProps = {
  caseStudies: ProjectMeta[];
  projects: ProjectMeta[];
};

const cardMeta = (project: ProjectMeta) =>
  [project.year, project.role].filter(Boolean).join(' · ');

const Home: NextPage<HomeProps> = ({ caseStudies, projects }) => {
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
          <h2>Case studies</h2>
          <p>
            Work I can talk about in depth. Client work is described, not
            shown.
          </p>
        </hgroup>
        <div className={styles.highlightProjects}>
          {caseStudies.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              summary={project.summary}
              slug={project.slug}
              image={project.image}
              meta={cardMeta(project)}
            />
          ))}
        </div>

        <hgroup>
          <h2>Projects</h2>
          <p>
            Projects from my studies. For more code, check out my{' '}
            <a href='https://github.com/bommezijn'>GitHub</a>
          </p>
        </hgroup>
        <div className={styles.highlightProjects}>
          {projects.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              summary={project.summary}
              slug={project.slug}
              image={project.image}
              meta={cardMeta(project)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allProjects = getAllProjects();
  return {
    props: {
      caseStudies: allProjects.filter((project) => project.type === 'case'),
      projects: allProjects.filter((project) => project.type === 'project'),
    },
  };
};

export default Home;
