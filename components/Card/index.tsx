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
        <Image
          className={styles.cardImage}
          src={`${props.image}`}
          alt=''
          width='50%'
          height='50%'
          layout='responsive'
          objectFit='contain'
        />
        <h3>{props.title}</h3>
        <p>{props.shortDesc}</p>
      </article>
    </Link>
  );
};

export default Card;
