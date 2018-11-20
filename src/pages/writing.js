import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Writing = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <section class="writing_container">
        <div class="col_container col_4">
          {posts.map (({node: post}) => {
            const {frontmatter} = post;
            const {fields} = post;
            return (
              <article class="col">
                <Link to={fields.slug} className="article_card_container">
                  <img src={frontmatter.featured_image.childImageSharp.sizes.src} alt={frontmatter.image_description} class="card_image" />
                  <div class="card_title_section">
                    <h5 class="card_source">
                      {frontmatter.date}
                    </h5>

                    <h1 class="card_title">
                      {frontmatter.title}
                    </h1>
                  </div>
                  <h3 class="card_subtitle">
                      {frontmatter.subtitle}
                  </h3>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query WritingQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
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
            image_description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Writing
