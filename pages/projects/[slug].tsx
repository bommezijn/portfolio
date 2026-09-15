import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getCaseStudy, getCaseStudySlugs, Project } from '../../lib/projects';
import styles from '../../styles/CaseStudy.module.css';

type CaseStudyProps = {
  project: Project;
};

const CaseStudy: NextPage<CaseStudyProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{`${project.title} · Nathan Bommezijn`}</title>
        <meta key='description' name='description' content={project.summary} />
      </Head>
      <article className={styles.caseStudy}>
        <Link href='/#projects' passHref>
          <a className={styles.back}>Back to all projects</a>
        </Link>
        <header className={styles.header}>
          <h1>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <dl className={styles.meta}>
            {project.year && (
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            )}
            {project.role && (
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            {project.stack.length > 0 && (
              <div>
                <dt>Stack</dt>
                <dd>{project.stack.join(', ')}</dd>
              </div>
            )}
          </dl>
          {project.confidential && (
            <p className={styles.note}>
              Built for a client. Visuals and names are left out on purpose.
            </p>
          )}
        </header>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getCaseStudySlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CaseStudyProps> = async ({
  params,
}) => {
  return {
    props: {
      project: getCaseStudy(String(params?.slug)),
    },
  };
};

export default CaseStudy;
