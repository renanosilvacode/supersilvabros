import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
const { parse } = require('rss-to-json');


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
  const rssItems = data.podcastRss.items;
  
  const [feed, setFeed] = useState([])
  useEffect(() => {
    parse('https://anchor.fm/s/7ebe7f20/podcast/rss').then(rss => {
      setFeed(rss.items)
    });
  }, [])

  console.log('{{{{DATA}}}}', data);

  if (rssItems.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />

      <ol style={{ listStyle: `none` }}>
        {rssItems.map((post, index) => {
          const title = post.title
          const slug = `podcast/${post.itunes_episode}`
          
          return (
            <li key={slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.created}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
                
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    podcastRss {
      title
      description
      items {
        title
        description
        link
        author
        created
        itunes_episode
        link
        published
        enclosures {
          url
          length
          type
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          podcastID
        }
      }
    }
  }
`
