import React, { FunctionComponent, FC } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';

type CardProps = {
  title: string;
  shortDesc: string;
  slug: string;
};

/* 
TODO: Wrap Card with Link tag, nav to project page
TODO: Style the card properly, with the idea of the concept
TODO: Style the grid container in Home.
*/

const Card = (props: CardProps) => {
  /* const Card: FunctionComponent = ({title, shortDesc}: CardProps) => {
  REASON WHY NOT: explicit about return type in comparison to implicit 
  https://github.com/typescript-cheatsheets/react/blob/main/README.md#function-components
*/
  return (
    <Link passHref href={`/projects/${encodeURIComponent(props.slug)}`}>
      <article className={styles.card}>
        <Image src='/vercel.svg' alt='' width={250} height={250} />
        <h3>{props.title}</h3>
        <p>{props.shortDesc}</p>
      </article>
    </Link>
  );
};

export default Card;
