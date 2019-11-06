import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SiteNav from '../components/site_nav'


const Writing = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <section class="page_header writing">

        <SiteNav />

        <div class="page_header_container container">
          <h1 class="h1_jumbo">Blog</h1>
        </div>


      </section>

      <section class="writing_container">
        <section class="row_container container">
            {posts.map (({node: post}) => {
              const {frontmatter} = post;
              const {fields} = post;
              return (
                <Link to={fields.slug} className="article_card_container">
                    <img
                      src={frontmatter.featured_image.childImageSharp.sizes.src}
                      class="card_image"
                    />
                    <caption class="card_caption">
                      <h4 class="caption_metatag">
                        {frontmatter.date}
                      </h4>
                      <h3 class="caption_title">
                        {frontmatter.title}
                    </h3>
                    <p class="caption_subtitle">
                          {frontmatter.subtitle}
                    </p>
                  </caption>
                </Link>
              );
            })}
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query WritingQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { type: { eq: "writing" } } }
    ) {
      totalCount
      edges {
        node {
          id
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
