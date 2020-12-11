import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SiteNav from '../components/site_nav'
import Footer from '../components/footer'


const Journal = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <SiteNav />

      <section class="page--container container">
        <div class="col_5">
          <section class="start-2-span-3">
            {posts.map (({node: post}) => {
              const {frontmatter} = post;
              const {fields} = post;
              return (
                <article class="journal-entry">
                  <h3 class="journal-entry__date">
                    {frontmatter.date}
                  </h3>
                  <Link to={fields.slug}>
                    <h2 class="journal-entry__title">
                      {frontmatter.title}
                    </h2>
                  </Link>
                  <figure class="journal-entry__cover-container">
                    <img
                      src={frontmatter.featured_image.childImageSharp.sizes.src}
                      class="journal-entry__cover-media"
                      alt="journal cover"
                    />
                  </figure>
                  <div
                    class= "journal-entry__body"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </article>
              );
            })}
          </section>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query JournalQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { type: { eq: "journal" }, published: { eq: true } } }
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

export default Journal
