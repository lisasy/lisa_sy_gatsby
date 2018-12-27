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
            const cardImage = frontmatter.card_image.childImageSharp.fixed.src;

            return (
            <article class="col">
              <Link to={fields.slug} className={frontmatter.layout + " work_card_container"}>
                <div class="card_content">

                  <div class="card_source_container">
                    <h5 class="card_source">
                      {frontmatter.source}
                    </h5>
                    <h5 class="card_source_detail">
                      {frontmatter.duration} · {frontmatter.role}
                    </h5>
                  </div>
                  <div class="card_body_container">
                    <h1 class="card_title">
                      {frontmatter.title}
                    </h1>
                    <p class="card_subtitle">
                      {frontmatter.subtitle}
                    </p>
                  </div>
                  <div class="card_cta_container">
                    <a href={fields.slug} target="_blank" rel="noopener noreferrer" class="button_primary">
                      <p class="button_title">View Project</p>
                    </a>
                  </div>
                </div>

                <div class="card_img" style={{backgroundImage: `url(${cardImage})`}}>
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
            duration
            role
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
