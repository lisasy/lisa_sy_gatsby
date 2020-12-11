import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SiteNav from '../components/site_nav'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const JournalItem  = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>

      <SiteNav />

      <section class="page--container container">
        <div class="col_5">
          <section class="start-2-span-3">
            <article class="journal-entry">
              <h3 class="journal-entry__date">
                { post.frontmatter.date }
              </h3>
              <h1 class="journal-entry__title">
                { post.frontmatter.title }
              </h1>
              <figure class="journal-entry__cover-container">
                <img
                  src={post.frontmatter.featured_image.childImageSharp.sizes.src}
                  class="journal-entry__cover-media"
                  alt="journal cover"
                />
              </figure>
              <div
                class= "journal-entry__body"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </article>
            <Link to={`/journal`}>
              See all blog entries
            </Link>
          </section>
        </div>
      </section>
      <Footer />
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
