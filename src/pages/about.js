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
          Hi, I'm <em class="highlight">Lisa Sy</em>, and I'm a digital product
            designer, illustrator, and artist based in <em class="gradient">Los Angeles, CA</em>.
        </h1>
      </div>
    </section>

    <section class="about_inner_container container">


      <section class="row_container col_centered">
        <h4>
          In a nutshell
        </h4>
        <p class="paragraph_larger">
          Outside of my professional design practice, I draw, paint, and write —
          all of which translates into my illustrations, comics and graphic
          narratives. I'm currently working on an autobiographical graphic
          memoir chronicling how my immigrant family and I co-created our American
          identity across our generational differences.
        </p>
        <p class="paragraph_larger">
          Born and raised in Los Angeles, I became a first-generation college
          graduate in my family when I graduated from <a
          href="https://www.wesleyan.edu/amst/" target="_blank" rel="noopener
          noreferrer">Wesleyan University with a B.A. in American Studies</a> with an
          emphasis on Race and Ethnic Studies. I got into design by making posters for
          my friend's theater shows and club meetings. I wondered what it would be like
          to bring graphic design to the web — and that's how I got into web design,
          which led me to UX, interaction, and product design. The rest is history.
        </p>
      </section>

      <section class="row_container">
      </section>
    </section>
  </Layout>
)

export default About
