import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PodcastPostTemplate = ({ data, location }) => {
  console.log(data, location);
  const ep = location.pathname.split('/')[2];
  const post = data.podcastRss.items[data.podcastRss.items.length - ep];
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.published}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.description }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <section>
        <p>
          Link <a href={post.link}> Link para o episódio</a>
        </p>
        <p>
          Ouvir: <br />
          <audio autoPlay="autoplay" controls="controls">
            <source src={post.enclosures[0].url} type="audio/mp3" />
            seu navegador não suporta HTML5<br/>
            Ouça <a href={post.link}> Link para o episódio</a>
          </audio>
        </p>
        <p>
        </p>

        
      </section>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default PodcastPostTemplate

export const pageQuery = graphql`
  query PodcastPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    podcastRss {
      items {
        title
        description
        author
        published
        itunes_episode
        link
        itunes_image {
          href
        }
        enclosures {
          url
          length
          type
        }
      }
    }
  }
`
