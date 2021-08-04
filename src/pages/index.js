import React from 'react'
import Footer from '../components/footer'
import Hero from '../components/hero_section'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <section class="index_container">
        <Hero />
          <article id="work" class="work_index container">
            <div class="work_inner_container">
            <header>
                <h2>
                  Comics & graphic narratives
                </h2>
              </header>     
              <h3>
                <Link to={`/shape-of-the-end`}>
                  — Shape of the End (2020)
                </Link>
              </h3>
              <h3>
                <Link to={`/waiting`}>
                  — Waiting (2019)
                </Link>
              </h3>
              <h3>
                <Link to={`/two-minutes`}>
                  — Two Minutes (2019)
                </Link>
              </h3>
              <h3>
                <Link to={"https://pluralsandnoun.com/"}>
                  — Plurals and Noun
                </Link>
              </h3>

            </div>
            <div class="work_inner_container">
              <header>
                <h2>
                  A smattering of past work
                </h2>
              </header>

            <section class="row_container">
                <div class="tallpoppy_ui"></div>
                <caption class="md:w-1/2">
                  <h4 class="caption_metatag">
                    Tall Poppy · 2019
                  </h4>
                  <h3 class="caption_title">
                    Rehauling how to proactively support people who
                    experience harassment and/or security breaches online
                  </h3>
                  <p>
                    With user research, product design, and product strategy,
                    I helped the Tall Poppy team overhaul their product that
                    provides tool and resources for people experiencing
                    online harassment and/or security breaches.
                  </p>
                </caption>
            </section>

            <section class="row_container">
                <div class="dropbox"></div>
                <caption class="md:w-1/2">
                  <h4 class="caption_metatag">
                    Dropbox · 2019
                  </h4>
                  <h3 class="caption_title">
                    Announcing new plan updates
                  </h3>
                  <p>
                    I partnered with their Growth team to help announce a new
                    plan and price to their customers.
                  </p>
                </caption>
            </section>
            
            <section class="row_container">
                <div class="tallpoppy_illustrations"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Tall Poppy · 2019
                  </h4>
                  <h3 class="caption_title">
                    Tall Poppy's Brand Illustrations
                  </h3>
                  <p>
                  </p>
                </caption>
            </section>


            <section class="row_container">
              <div class="facebook_content_warnings"></div>
                <caption class="md:w-1/2">
                  <h4 class="caption_metatag mb-0">
                    Facebook · 2017
                  </h4>
                  <h3 class="caption_title">
                    Protecting people with content warnings
                  </h3>
                  <p>
                    I led product design to help millions of people deal with
                    unexpected, sensitive content they see on Facebook.
                  </p>
                </caption>
          </section>

            <section class="row_container">
              <div class="facebook_reporting"></div>
              <caption>
                <h4 class="caption_metatag">
                  Facebook · 2016
                </h4>
                <h3 class="caption_title">
                  Reporting content that don't belong online
                </h3>
              </caption>
            </section>

            <section class="row_container col_2">
              <div>
                <div class="facebook_music"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Facebook · 2018
                  </h4>
                  <h3 class="caption_title">
                    Connecting fans and artists around ticket sales
                  </h3>
                </caption>
              </div>
              <div>
                <div class="facebook_authenticity"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Facebook · 2015
                  </h4>
                  <h3 class="caption_title">
                    An authentic identity online
                  </h3>
                </caption>
              </div>
            </section>
          </div>
          </article>
      </section>
      <Footer />
    </Layout>
  )};

export default IndexPage
