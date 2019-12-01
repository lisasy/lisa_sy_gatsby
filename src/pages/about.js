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
      <section class="row_container col_2 flex_vertical_push">
        <div class="row_container_col flex_start">
          <h1>
            I partner with startups, established companies, and everything
            in-between to help bring their businesses to the next level.
          </h1>
        </div>
        <div class="row_container_col flex_end">
          <p class="paragraph_larger">
            Specializing in building thoughtful product experiences with
            measurable and meaningful results, I'm happy to solve some of these
            common bottlenecks, whether you:
          </p>
          <p class="paragraph_larger">
            <ul>
              <li>
                Have an idea in your head, but need to flesh it out into a
                tangible prototype that you funding.
              </li>
              <li>
                Need to optimize your existing product or service to reach the
                next phase of growth.
              </li>
              <li>
                Know that there are some key pain points with your product or
                service, but aren't sure where to start.
              </li>
            </ul>
          </p>
          <p>
            <button class="button_primary">
              <a href="mailto:hello@lisasy.com">
                Let's work together
              </a>
            </button>
          </p>
        </div>
        <div class="row_container">
        </div>
      </section>

        <section class="row_container">
          <br />
          <hr />
          <br />
        </section>

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
        <p class="paragraph_larger">
          Since early 2017, I’ve been a board member of <a
          href="http://oaklanddigital.org/" target="_blank" rel="noopener
          noreferrer">Bridgegood</a>, a non-profit in Oakland, CA giving exposure of
          creative jobs and skills-development to  early-career creative professionals
          coming from traditionally underrepresented backgrounds.
        </p>
      </section>

      <section class="row_container">
      </section>
    </section>
  </Layout>
)

export default About
