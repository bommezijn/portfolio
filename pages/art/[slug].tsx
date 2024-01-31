import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import config from '../../utilities/sanityClient';
import { createClient, groq } from 'next-sanity';
import {PortableText} from '@portabletext/react';
import { ReactNode } from 'react';

import styles from '../../styles/art.module.css';

import {useNextSanityImage} from 'next-sanity-image'
import Image from 'next/image';
import { SanityImage } from 'sanity-image';

// import Refractor from 'react-refractor';
// import js from "refractor/lang/javascript";

// Refractor.registerLanguage(js);

interface content {
  title: string,
  author: {
    name: string
  },
  body: any,
  categories: {
    title: string,
    description: string,
  }[],
  image: {
    url: string
  },
  children: ReactNode;
}

const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(config, asset);

  if (!imageProps) return null;

  return (<Image 
    {...imageProps}
    layout='responsive'
    sizes='(max-width: 800px) 100vw, 800px'
  />);
}

const myPortableTextComponents = {
  types: {
    image: ({value}) => {
      return (
        <SanityImage className={styles.blogContent} {...value} />
      );
    },
    // codeField: ({ value }): any => {
    //   return (
    //     <Refractor language={value.language} value={value.code} />
    //   )
    // }
  },
};


const ArtPiece: NextPage<{ content: content }> = ( {content} ) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main className={styles.container}>
        <a className={styles.backButton} onClick={() => router.back()}>back</a>
        <section>
          <header>
            <h1>{content?.title}</h1>
            <div className={styles.author}>
              <img src={content?.author.image.asset.url} alt="" />
              <p>{content?.author.name}</p>
            </div>
          </header>
          <article className={styles.article}>
            <img className={styles.headerImage} src={content?.image.url} alt="" />
            {/* <PortableText value={content?.body} /> */}
            <PortableText value={content?.body} components={myPortableTextComponents} />
          </article>
        </section>
        <section>
          {/* <pre>{JSON.stringify(content, null, 2)}</pre> */}
        </section>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      // Object variant:
      { params: { slug: 'slug' }},
    ],
    fallback: true,
  }
}

const client = createClient(config)
export async function getStaticProps({ params }: any) {
  const { slug } = params
  const content = await client.fetch(groq`
    *[_type == "post" && slug.current == "${slug}"][0]
    {
      title,
      author->{name,
        "image": image{
          "asset": asset->
        }
      },
      body,
      categories[]->{title, description},
      "image":mainImage.asset->,
      codeField
    }
  `)
  // console.log(content)
  return {
    props: {
      content,
    }
  }
}

export default ArtPiece