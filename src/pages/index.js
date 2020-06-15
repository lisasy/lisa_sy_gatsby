import React from 'react'
import { Link } from 'gatsby'
import SiteNav from '../components/site_nav'
import Hero from '../components/hero_section'
import Img from "gatsby-image"

import Layout from '../components/layout'
import PortraitImage from '../components/portrait_image'

const IndexPage = () => {
  return (
    <Layout>
      <section class="index_container">
        <Hero />
          <article id="work" class="work_index container">
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
                  <h4 class="caption_metatag">
                    Facebook · 2017
                  </h4>
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
    </Layout>
  )};

export default IndexPage
