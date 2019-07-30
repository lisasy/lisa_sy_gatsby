import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PortraitImage from '../components/portrait_image'
import EmailSignUp from '../components/email_sign_up'

import Layout from '../components/layout'

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <section class="index_container">
        <article class="index_section_container p_b_m">
          <div class="col_primary">
            <h1 class="index_site_header">
              Hello <i class="em em-wave emoji"></i> I'm a product
              designer, illustrator, and artist based in California.
            </h1>
            <p>
              Previously at <a href="http://dropbox.com" target="_blank"
                rel="noopener noreferrer">Dropbox</a>, <a
                href="http://facebook.com" target="_blank" rel="noopener
    noreferrer">Facebook</a>, and <a href="http://thoughtbot.com"
    target="_blank" rel="noopener noreferrer">thoughtbot</a>. Interested in
  working together? Drop me a line at <a
    href="mailto:hello@lisasy.com">hello[at]lisasy.com</a>.
            </p>
          </div>
          <div class="col_secondary">
            <figure class="round_img">
              <PortraitImage />
            </figure>
          </div>
        </article>

        <article id="work" class="container">
          {posts.map (({node: post}) => {
            const {frontmatter} = post;
            const {fields} = post;
            const cardImage = frontmatter.card_image.childImageSharp.fixed.src;
            return (

            <div class="">
              <Link to={fields.slug} className={frontmatter.reference + " " + frontmatter.layout + " work_card_container"}>


                  <div class="card_img" style={{backgroundImage: `url(${cardImage})`}}>
                  </div>
                  <caption class="card-source__container text_align--center">
                    <figcaption class="card-source__title">
                      {frontmatter.source} · {frontmatter.title}
                    </figcaption>
                    <figcaption class="card-source__subtitle">
                      {frontmatter.role}
                    </figcaption>
                  </caption>
              </Link>
            </div>
            );
          })}
        </article>

        <article class="index_section_container quotation">
          <figure>
            <blockquote>
              The precise role of the artist, then, is to illuminate that
              darkness, blaze roads through that vast forest, so that we will
              not, in all our doing, lose sight of its purpose, which is, after
              all, to make the world a more human dwelling place.
            </blockquote>
            <figcaption>
              James Baldwin
            </figcaption>
          </figure>
        </article>
        <article class="index_section_container email_sign_up">
        </article>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexWorkQuery {
    allMarkdownRemark (
      filter: { frontmatter: { type: { eq: "work" }, visible: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            order
            subtitle
            source
            duration
            role
            layout
            card_image {
              childImageSharp {
                fixed(width: 800, quality: 90) {
                  src
                }
              }
            }
            card_image_alt
            card_cta
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

export default IndexPage
