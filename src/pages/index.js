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
                  Comics
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
                <div class="dropbox"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Dropbox · 2019
                  </h4>
                  <h3 class="caption_title">
                    Announcing new plan updates
                  </h3>
                </caption>
            </section>


            <section class="row_container">
              <div class="facebook_content_warnings"></div>
                <caption>
                  <div className="flex align-center gap-4">
                    <h4 class="caption_metatag mb-0">
                      Facebook
                    </h4>
                    <h4 class="caption_metatag mb-0">
                      2017
                    </h4>
                  </div>
                  <h3 class="caption_title">
                    Protecting people with content warnings
                  </h3>
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
