import React from 'react'
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
            Hello, I’m Lisa <span role="img" aria-label="wave">👋</span>
          </h1>
        </div>
        <div class="hero_description_container">
          <p>
            Welcome to my little corner on the internet.
          </p>
          <p>
            Based in sunny Los Angeles, I’m leading product design with some
            awesome people at <a href="http://forem.com" target="_blank" rel="noreferrer">Forem</a>. I also draw a lot.
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