import React from 'react'
import { Link } from 'gatsby'
import SiteNav from './site_nav'

const Hero = () => {
  return (

    <section class="hero_header">
      <SiteNav />
      <section class="hero_header_inner_content container">

        <div class="hero_title">
          <h1 class="h1_jumbo">
            I’m Lisa 👋🏼
            <br />
            An independent product designer & strategist who frequently draws.
          </h1>
        </div>
        <div class="hero_description_container">
          <p>
            Based in sunny Los Angeles & remotely, I partner with startups, established companies, and everything in-between to help bring their businesses to the next level. Interested in working together? Reach me at at <strong>hello[at]lisasy.com</strong>. 🌴
          </p>

          <div class="inline_button_group">
            <a href="mailto:hello@lisasy.com">
              <button class="button_primary">
                Contact Me
              </button>
            </a>
          </div>
        </div>

      </section>
    </section>
  );
}

export default Hero
