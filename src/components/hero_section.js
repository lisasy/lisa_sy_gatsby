import React from 'react'
import { Link } from 'gatsby'
import SiteNav from './site_nav'

import HeroImage1 from '../images/hero_1.jpg'
import HeroImage2 from '../images/hero_2.jpg'
import HeroImage3 from '../images/hero_3.jpg'

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
          I design digital products and services, paint, draw, code, climb,
    bike, read, write, and sing karaoke. Black lives matter
          </p>
          <p>
            Based in sunny Los Angeles, I’m leading product design with some awesome people at <a href="http://forem.com" target="_blank">Forem</a> — it’s
    pretty sweet.
          </p>
        </div>
      </section>
      <section class="hero-gallery"> 
        <img src={HeroImage1} alt="Black" />
        <img src={HeroImage2} alt="Lives" />
        <img src={HeroImage3} alt="Matter" />
      </section>
    </section>

  );
}

export default Hero
