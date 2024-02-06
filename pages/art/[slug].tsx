import { ReactNode } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Img from 'next/image';
// import config from '../../utilities/sanityClient';
import { groq } from 'next-sanity';
import {PortableText} from '@portabletext/react';
import {useNextSanityImage} from 'next-sanity-image';
import { createClient } from '@sanity/client';
// import { SanityImage } from 'sanity-image';

import styles from '../art/blogpost.module.css'

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

const configuredSanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-08-11', // or today's date for latest
	useCdn: true
});


const SanityImage = ({ asset }: any) => {
  const imageProps = useNextSanityImage(configuredSanityClient, asset);

  if (!imageProps) return null;

  return (<Img 
    {...imageProps}
    layout='responsive'
    sizes='(max-width: 800px) 100vw, 800px'
    width={500}
    height={500}
  />);
}

const myPortableTextComponents = {
  types: {
    image: ({value}: any) => {
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


const ArtPiece: NextPage<{ content: content }> = ( {content}: any ) => {
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
              {/* <Img src={content?.author.image.asset.url} alt="" /> */}
              {/* <Img 
                {...content?.author.image.asset.url}
                layout='responsive'
                sizes='(max-width: 800px) 100vw, 800px'
                width={500}
                height={500}
              /> */}
              <SanityImage {...content?.author.image.asset.url} />
              <p>{content?.author.name}</p>
            </div>
          </header>
          <article className={styles.article}>
            {/* <Img className={styles.headerImage} src={content?.image.url} alt="" />
            <Img 
                {...content?.image.url}
                className={styles.headerImage}
                layout='responsive'
                sizes='(max-width: 800px) 100vw, 800px'
                width={500}
                height={500}
              /> */}
              <SanityImage {...content?.image.url} />
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

export async function getStaticProps({ params }: any) {
  const client = configuredSanityClient
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