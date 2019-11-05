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
            <div class="inner_container">
              <header>
                <h2>
                  A smattering of past work
                </h2>
              </header>

            <section class="row_container">
                <div class="tall_poppy"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Tall Poppy · 2019
                  </h4>
                  <h3 class="caption_title">
                    giving people and businesses tools to stay safe online
                  </h3>
                  <p class="caption_subtitle">
                    I partnered with their Growth team to help announce a  new plan and price to their customers.
                  </p>
                </caption>
            </section>

            <section class="row_container">
                <div class="dropbox"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Dropbox · 2019
                  </h4>
                  <h3 class="caption_title">
                    Announcing new plan updates
                  </h3>
                  <p class="caption_subtitle">
                    I partnered with their Growth team to help announce a  new plan and price to their customers.
                  </p>
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
                  <p class="caption_subtitle">
                    I led product design to help millions of people deal with unexpected, sensitive content they see on Facebook.
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
                <p class="caption_subtitle">
                  I led product design to improve Facebook's reporting platform so that people can flag inappropriate, sensitive content.
                </p>
              </caption>
            </section>

            <section class="row_container col_2">
              <div class="row_container_col">
                <div class="facebook_music"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Facebook · 2018
                  </h4>
                  <h3 class="caption_title">
                    Connecting fans and artists around ticket sales
                  </h3>
                  <p class="caption_subtitle">
                    I designed how to better connect musicians with their fans through ticket countdowns to drive excitement and virality.
                  </p>
                </caption>
              </div>
              <div class="row_container_col">
                <div class="facebook_authenticity"></div>
                <caption>
                  <h4 class="caption_metatag">
                    Facebook · 2015
                  </h4>
                  <h3 class="caption_title">
                    An authentic identity online
                  </h3>
                  <p class="caption_subtitle">
                    I drove product direction on how people from marginalized communities can remain on Facebook with their authentic names.
                  </p>
                </caption>
              </div>
            </section>
          </div>
          </article>
      </section>
    </Layout>
  )};

export default IndexPage
