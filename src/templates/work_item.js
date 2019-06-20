import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"



const WorkItem = ({ data }) => {
  const post = data.markdownRemark
  const featuredImage = post.frontmatter.featured_image.childImageSharp.sizes.src
  return (
    <Layout>
      <section class="project_container">
        <header className="project_header work_section col_full" style={{backgroundImage: `url(${featuredImage})`}}>
          <div class="project_header_content col">
            <h1 class="project_title">
              {post.frontmatter.title}
            </h1>
            <h1 class="project_sourceline">
              {post.frontmatter.source} · {post.frontmatter.role}
            </h1>
          </div>
        </header>
        <div class="project_body_container">
          <article class="project_body">
              <div dangerouslySetInnerHTML = {{ __html: post.html }} />
          </article>
        </div>
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
