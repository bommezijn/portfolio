import React, { FunctionComponent, FC } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';

type CardProps = {
  title: string;
  shortDesc: string;
  slug: string;
  image: string;
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
      <article className={styles.card}>
        <div className='cardImage'>
          <Image
            className={styles.cardImage}
            src={`${props.image}`}
            alt={`A photo describing a project called ${props.title}`}
            width={776}
            height={475}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{props.title}</h3>
          <p className={styles.cardDescription}>{props.shortDesc}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
