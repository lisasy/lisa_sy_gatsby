import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"



const WorkItem = ({ data }) => {
  const post = data.markdownRemark
  const featuredImage = post.frontmatter.featured_image.childImageSharp.sizes.src
  return (
    <Layout>
      <section class="work">
        <header class="work_display">
          <section class="work_display--headline">
            <div class="container">
              <h4 class="subtitle">
                {post.frontmatter.source} · {post.frontmatter.role}
              </h4>
              <h1 class="title">
                {post.frontmatter.title}
              </h1>
            </div>
          </section>
          <section class="work_display--graphic">
            <img src={featuredImage} />
          </section>
        </header>
        <article class="work_body">
          <div dangerouslySetInnerHTML = {{ __html: post.html }} />
        </article>
     </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug } }) {
      html
      frontmatter {
        title
        duration
        role
        source
        subtitle
        reference
        featured_image {
          childImageSharp {
            sizes(maxWidth: 1400) {
              src
            }
          }
        }
      }
    }
  }
`

export default WorkItem
