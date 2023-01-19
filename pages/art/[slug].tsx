import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import config from '../../utilities/sanityClient';
import { createClient, groq } from 'next-sanity';
import {PortableText} from '@portabletext/react';
// import styles from '../styles/art.module.css'

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
  }
  children: React.ReactNode
}

const ArtPiece: NextPage<{ content: content }> = ( {content} ) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main>
        <a href=""></a>
        <section>
          <header>
            <h1>{content?.title}</h1>
            <p>{content?.author.name}</p>
          </header>
          <article>
            <img src={content?.image.url} alt="" />
            <PortableText value={content?.body} />
          </article>
        </section>
        {/* <section>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </section> */}
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

type Parameters = {
  slug: string
}

const client = createClient(config)
export async function getStaticProps(params: any) {
  const { slug } = params
  const content = await client.fetch(groq`
    *[_type == "post" && slug.current == "${slug}"][0]
    {
      title,
      author->{name},
      body,
      categories[]->{title, description},
      "image":mainImage.asset->
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