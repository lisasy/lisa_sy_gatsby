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
            Based in sunny Los Angeles, I'm a lead product designer at <a href="http://dev.to" target="_blank">DEV</a> — it's pretty sweet. You can reach me at at <strong>hello[at]lisasy.com</strong>. 🌴
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
