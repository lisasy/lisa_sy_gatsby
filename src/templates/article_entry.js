import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Article = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <section class="writing_container">
        <article class="article_container">
          <header class="article_header">
            <div class="article_header_content">
              <h3 class="article_date">
                { post.frontmatter.date }
              </h3>
              <h1 class="article_title">
                { post.frontmatter.title }
              </h1>
              <h3 class="article_subtitle">
                { post.frontmatter.subtitle }
              </h3>
            </div>
          </header>

          <hr />

          <div class="article_body_content">
            <p>
              <img src={post.frontmatter.featured_image.childImageSharp.sizes.src} alt={post.frontmatter.image_description} />
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
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
        featured_image {
          childImageSharp {
            sizes(maxWidth: 640) {
              src
            }
          }
        }
      }
    }
  }
`

export default Article
