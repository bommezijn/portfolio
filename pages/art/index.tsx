import type { NextPage } from 'next';
import config from '../../utilities/sanityClient';
import { createClient, groq } from 'next-sanity';
// import styles from '../styles/art.module.css'

const ArtGallery: NextPage = ({posts}) => {
  return (
    <>
     <header>
        <h1>Artprojects</h1>
      </header>
      <main>
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <a href={`/art/${post.slug.current}`}>
                  <img src={`${post.img}`} alt="" />
                  <h2>{post.title}</h2>
                  <ul>
                    {post.categories.map((category) => (
                      <li key={category}>{category}</li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>
        )}
        {!(posts.length > 0) && <p>No posts to show</p>}
        {posts.length > 0 && (
          <div>
            <pre style={{display: 'none'}}>{JSON.stringify(posts, null, 2)}</pre>
          </div>
        )}
        {!(posts.length > 0) && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  )
}

const client = createClient(config)

export async function getStaticProps() {

  const posts = await client.fetch(groq`*[_type == "post" ]{_id, "categories":categories[]->title, "img":mainImage.asset->url, slug, title}`)
  // console.log(posts)
  
  return {
    props: {
      posts,
    }
  }
}

export default ArtGallery