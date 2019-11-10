import React from 'react'
import Layout from '../components/layout'
import PortraitImage from '../components/portrait_image'

const About = () => (
  <Layout>
    <section class="about_container">
      <div class="about_section_container">
        <div class="col_primary p_b_m">
          <h1>
            Crafting products & services to make people's lives a little bit
            easier
          </h1>

          <p>
            Hello <i class="em em-wave emoji"></i> I'm a software/product
            designer, strategist, and illustrator based in the San Francisco Bay
  Area in California.  I have designed and built product experiences
  at places like <a href="http://facebook.com" target="_blank" rel="noopener
    noreferrer">Facebook</a>, <a href="http://dropbox.com" target="_blank"
    rel="noopener noreferrer">Dropbox</a>, and <a href="http://thoughtbot.com"
  target="_blank" rel="noopener noreferrer">thoughtbot</a>.
          </p>
          <p>
            As an independent designer, I'm eager to collaborate with good,
            curious folks working on compelling projects and initiatives. If you
            think we can work well together, feel free to reach out to me at <a
  href="mailto:hello@lisasy.com">hello[at]lisasy.com</a>.
          </p>
          <a href="mailto:hello@lisasy.com" target="_blank" rel="noopener noreferrer" class="button_primary">
            <p class="button_title">Contact Me</p>
          </a>
        </div>
        <div class="col_secondary">
          <figure class="round_img">
            <PortraitImage />
          </figure>
        </div>
      </div>

      <div class="about_section_container secondary">
        <div class="col_primary">
>
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
