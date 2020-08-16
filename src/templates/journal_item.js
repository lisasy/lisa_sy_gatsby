import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SiteNav from '../components/site_nav'
import { Link } from 'gatsby'

const JournalItem  = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>

      <SiteNav />

      <section class="article_container container">
          <header class="article_header_container">
            <div class="article_header_content_container">

              <h3 class="article_date">
                { post.frontmatter.date }
              </h3>
              <h1 class="article_title">
                { post.frontmatter.title }
              </h1>
              <p class="article_subtitle">
                { post.frontmatter.subtitle }
              </p>
            </div>
          </header>

          <div class="article_body_content_container">
            <img
              src={post.frontmatter.featured_image.childImageSharp.sizes.src}
              alt="this is something I'll populate"
            />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer class="article_end_footer">
              <button class="button_primary">
                <Link to={`/journal`}>
                  See all blog entries
                </Link>
              </button>
            </footer>
          </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        image_description
        featured_image {
          childImageSharp {
            sizes(maxWidth: 800) {
              src
            }
          }
        }
      }
    }
  }
`

export default JournalItem
