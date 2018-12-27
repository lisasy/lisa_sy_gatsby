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
        <article class="index_section_container">
          <div class="col_primary">
            <h1 class="index_site_header">
              Crafting products & services to help organizations prosper sustainably.
            </h1>
            <p>
              Hello <i class="em em-wave emoji"></i> I'm a digital product designer, strategist, and illustrator
              based in the San Francisco Bay Area in California.  I have designed products at places like <a
                href="http://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>, <a
                  href="http://dropbox.com" target="_blank" rel="noopener noreferrer">Dropbox</a>, and <a href="http://thoughtbot.com"
                target="_blank" rel="noopener noreferrer">thoughtbot</a>, and I'm eager to collaborate on solving compelling user and business problems. I am available for freelance/contract opportunities in July 2019.
            </p>
          </div>
          <div class="col_secondary">
            <figure class="round_img">
              <PortraitImage />
            </figure>
          </div>
        </article>

        <article class="index_section_container highlight">
          <div class="col_container col_1">

            {posts.map (({node: post}) => {
              const {frontmatter} = post;
              const {fields} = post;
              const cardImage = frontmatter.card_image.childImageSharp.fixed.src;
              return (

              <article class="col">
                <Link to={fields.slug} className={frontmatter.reference + " " + frontmatter.layout + " work_card_container"}>

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
          <EmailSignUp />
        </article>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexWorkQuery {
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
