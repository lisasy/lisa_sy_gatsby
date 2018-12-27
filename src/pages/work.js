import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Work = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <section class="work_container">
        <div class="col_container col_1">

          {posts.map (({node: post}) => {
            const {frontmatter} = post;
            const {fields} = post;
            return (

            <article class="col">
              <Link to={fields.slug} className={frontmatter.layout + " work_card_container"}>
                <div class="card_content">
                  <h4 class="card_source">
                    {frontmatter.source}
                  </h4>
                  <h1 class="card_title">
                    {frontmatter.title}
                  </h1>
                  <p class="card_subtitle">
                    {frontmatter.subtitle}
                  </p>
                </div>
                <div class="card_img">
                  <figure>
                    <img
                      src={frontmatter.card_image.childImageSharp.fixed.src}
              alt="test alt" class="card_image" />
                  </figure>
                </div>
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
  query WorkQuery {
    allMarkdownRemark (
      filter: { frontmatter: { type: { eq: "work" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            source
            layout
            card_image {
              childImageSharp {
                fixed(width: 800) {
                  src
                }
              }
            }
            card_image_alt
            reference
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Work
