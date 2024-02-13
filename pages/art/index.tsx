import { NextPage } from 'next';
import config from '../../utilities/sanityClient';
import { groq } from 'next-sanity';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import Img from 'next/image';

import { useNextSanityImage } from 'next-sanity-image';
import { createClient } from '@sanity/client';
import styles from '../art/artIndex.module.css';

interface posts {
  _id: Key | null | undefined;
  categories: string[];
  img: string;
  slug: {
    current: any;
  };
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}

const ArtGallery: NextPage<{ posts: posts[] }> = ({ posts }: any) => {
  return (
    <>
      <section className={styles.container}>
        <header>
          <h1>Artprojects</h1>
          <p>
            Blogposts created with sanity.io to document and faciliate the
            process of creative coding.
          </p>
        </header>
        <main>
          {posts.length > 0 && (
            <ul className={styles.blogGrid}>
              {posts.map(
                (post: {
                  _id: Key | null | undefined;
                  slug: { current: any };
                  img: any;
                  title:
                    | boolean
                    | ReactChild
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                  categories: any[];
                }) => (
                  <li className={styles.blogItem} key={post._id}>
                    <a href={`/art/${post.slug.current}`}>
                      {/* <Img
                      src={post.img.url}
                      alt=""
                      width={500}
                      height={500}
                      layout='responsive'
                      sizes='(max-width: 800px) 100vw, 800px'
                  /> */}
                      {/* {console.log(post)} */}
                      <Img
                        src={post.img}
                        alt=""
                        width={600}
                        height={400}
                        layout="responsive"
                      />
                      <div className={styles.postInfo}>
                        <h2>{post.title}</h2>
                        <ul>
                          {post.categories?.map((category) => (
                            <li key={category}>{category}</li>
                          ))}
                          {/* {post.categories?.map((category) => {
                            if (category.length > 0)
                              return <li key={category}>{category}</li>
                          }
                          )} */}
                        </ul>
                      </div>
                    </a>
                  </li>
                )
              )}
            </ul>
          )}
          {!(posts.length > 0) && <p>No posts to show</p>}
          {posts.length > 0 && (
            <div>
              <pre style={{ display: 'none' }}>
                {JSON.stringify(posts, null, 2)}
              </pre>
            </div>
          )}
          {!(posts.length > 0) && (
            <div>
              <div>ohoh</div>
              <p>
                Your data will show up here when you&sbquo;ve configured
                everything correctly
              </p>
            </div>
          )}
        </main>
      </section>
    </>
  );
};

const client = createClient(config);

// export async function getStaticProps() {

//   const posts = await client.fetch(groq`*[_type == "post" ]{_id, "categories":categories[]->title, "img":mainImage.asset->url, slug, title} | order(title asc)`)
//   // console.log(posts)

//   return {
//     props: {
//       posts,
//     }
//   }
// }

export async function getServerSideProps() {
  const posts = await client.fetch(
    groq`
      *[_type == "post"]{_id, "categories":categories[]->title, "img":mainImage.asset->url, slug, title} | order(title asc)
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default ArtGallery;
