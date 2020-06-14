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
            Hello, I’m Lisa 👋🏼
          </h1>
        </div>
        <div class="hero_description_container">
          <p>
          I design digital products and services, paint, draw, code, climb, bike,
        read, write, and sing karaoke.
          </p>
          <p>
            Based in sunny Los Angeles, I’m leading product design at DEV — it’s
    pretty sweet.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Hero
