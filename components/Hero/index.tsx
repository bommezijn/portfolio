import React, { FunctionComponent } from 'react';
import styles from './style.module.css';

type HeroProps = {
  name: string;
  colour: string;
};

const Hero: FunctionComponent = ({ name, colour }: any) => {
  return (
    <div className={styles.introCon}>
      <div className={styles.heroCon}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={colour}
            d="M51.9,-17C58.9,4.8,50.6,31.4,32.6,44.3C14.6,57.3,-12.9,56.5,-35.5,41.8C-58.1,27,-75.8,-1.7,-69.1,-23C-62.3,-44.4,-31.2,-58.5,-4.4,-57.1C22.4,-55.7,44.9,-38.8,51.9,-17Z"
            transform="translate(100 100)"
          />
        </svg>
        <h1>Code with {name}</h1>
        <p>Front-end developer / minimalist / dog lover </p>
      </div>
    </div>
  );
};

export default Hero;
