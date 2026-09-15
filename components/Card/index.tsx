import React, { FunctionComponent, FC } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';

type CardProps = {
  title: string;
  summary: string;
  slug: string;
  image?: string | null;
  meta?: string;
};

/* 
TODO: Style the card properly, with the idea of the concept
*/

const Card = (props: CardProps) => {
  /* const Card: FunctionComponent = ({title, shortDesc}: CardProps) => {
  REASON WHY NOT: explicit about return type in comparison to implicit 
  https://github.com/typescript-cheatsheets/react/blob/main/README.md#function-components
*/

  return (
    <Link passHref href={`/projects/${encodeURIComponent(props.slug)}`}>
      <a
        className={
          props.image ? styles.card : `${styles.card} ${styles.textCard}`
        }>
        <article>
          {props.image && (
            <div>
              <Image
                className={styles.cardImage}
                src={props.image}
                alt={`A photo describing a project called ${props.title}`}
                width={776}
                height={475}
              />
            </div>
          )}
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            {props.meta && <p className={styles.cardMeta}>{props.meta}</p>}
            <p className={styles.cardDescription}>{props.summary}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default Card;
