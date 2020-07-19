import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SiteNav from '../components/site_nav'


const Writing = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <SiteNav />

      <section class="page--container container">
        <div class="col_5">
          <section class="span--3">
            {posts.map (({node: post}) => {
              const {frontmatter} = post;
              const {fields} = post;
              return (
                <article class="journal-entry--item">
                  <h3 class="journal-entry--date">
                    {frontmatter.date}
                  </h3>
                  <h2 class="journal-entry--title flipped">
                    {frontmatter.title}
                  </h2>
                  <figure class="journal-entry--cover-container">
                    <img
                      src={frontmatter.featured_image.childImageSharp.sizes.src}
                      class="journal-entry--cover-media"
                      alt="this is something i'll replace"
                    />
                  </figure>
                  <div
                    class= "journal-entry--body"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </article>
              );
            })}
          </section>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query WritingQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { type: { eq: "writing" }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
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
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Writing
