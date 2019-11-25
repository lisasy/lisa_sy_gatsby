import React from 'react'
import Layout from '../components/layout'
import PortraitImage from '../components/portrait_image'
import SiteNav from '../components/site_nav'

const About = () => (
  <Layout>
    <section class="page_header about">
      <SiteNav />
      <div class="page_header_inner_content container">
        <h1 class="h1_jumbo">
          Hi, I'm <em class="highlight">Lisa Sy</em>, and I'm a digital product designer, illustrator, and artist based in Los Angeles, CA.
        </h1>
      </div>
    </section>

    <section class="about_inner_container container">
      <section class="row_container col_2">
        <div class="row_container_col flex_start">
          <h1>
            I partner with startups, established companies, and everything in-between to help bring their businesses to the next level.
          </h1>
        </div>
        <div class="row_container_col flex_end">
          <p class="paragraph_larger">
            Specializing in building thoughtful product experiences with measurable and meaningful results, I'm happy to solve some of these common bottlenecks, whether you:
          </p>
          <p class="paragraph_larger">
            <ul>
              <li>
                Have an idea in your head, but need to flesh it out into a tangible prototype that you funding.
              </li>
              <li>
                Need to optimize your existing product or service to reach the next phase of growth.
              </li>
              <li>
                Know that there are some key pain points with your product or service, but aren't sure where to start.
              </li>
            </ul>
          </p>
          <p>
            <a href="mailto:hello@lisasy.com">
              <button class="button_primary">
                Let's work together
              </button>
            </a>
          </p>
        </div>
        <div class="row_container">
        </div>
      </section>




      <div class="about_section_container secondary">
        <div class="col_primary">
      <p>
          Outside of my professional design practice, I maintain a visual arts
          practice, write and draw graphic stories, climb, curate art and literary
          events with local Bay Area artists, and volunteer with my local
          community.
          </p>

          <p>
          Born and raised in Los Angeles, I became a first-generation college graduate in my family when I graduated from <a
            href="https://www.wesleyan.edu/amst/" target="_blank" rel="noopener noreferrer">Wesleyan
            University with a B.A. in American Studies</a> with an emphasis on Race
          and Ethnic Studies. I got into design by making posters for my
          friend's theater shows and club meetings. I wondered what it would be
          like to bring graphic design to the web -- and that's how I got into
          web design, which led me to software design. The rest is history.
        </p>

          <p>
          Since early 2017, I’ve been a board member of <a
            href="http://oaklanddigital.org/" target="_blank" rel="noopener noreferrer">Bridgegood</a>,
          a non-profit in Oakland, CA giving exposure of creative jobs and
          skills-development to  early-career creative professionals coming from
          traditionally underrepresented backgrounds.
          </p>
        </div>

        <div class="col_secondary featured">
          <section class="button_stack">
            <a href="https://spec.fm/podcasts/design-details/45158" class="button_stack_li" rel="noopener noreferrer">
              <h6 class="li_source">August 24, 2016 · Podcast</h6>
              <h5 class="li_title">Design Details #159 Twe-Mail</h5>
            </a>

            <a href="https://techiesproject.com/lisa-sy/" class="button_stack_li" rel="noopener noreferrer">
              <h6 class="li_source">March 5, 2016 · Interview</h6>
              <h5 class="li_title">The Techies Project</h5>
            </a>
          </section>
        </div>
      </div>

    </section>
  </Layout>
)

export default About
