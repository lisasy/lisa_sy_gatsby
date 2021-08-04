import React from 'react'
import Layout from '../components/layout'
import SiteNav from '../components/site_nav'
import Footer from '../components/footer'

const About = () => (
  <Layout>
    <section class="bg-peach pb-8 border-b-2 border-midnight">
      <SiteNav />
      <section className="page--container container">
        <header className="page--header">
          <h1 className="h1_jumbo">
            imagining possibility with design,  drawing, and questions.
          </h1>
        </header>
        <section>
          <h3 class="text-base font-medium md:font-normal md:text-xl font-sans-text border-b border-dashed mb-3 pb-2">
            Lisa Sy <span class="opacity-40">(she/her)</span>
          </h3>
          <div class="grid gap-y-4 md:gap-y-0 md:grid-cols-2 md:gap-x-8">
            <article class="order-2 md:order-1 span--1">
              <h3 class="text-base md:text-xl font-sans-text mt-0">
                Today, I’m a product design lead on the New Product Experimentation
                org within Facebook. Previously, I was leading product design at Forem,
                where we're empowered creators to build online communities on our
                open source platform. 
              </h3>
              <p>
                For the past decade, I've designed reporting
                and content moderation tools at Facebook, freelanced with both
                large companies and startups, and wore multiple hats as a
                designer/front-end-developer at thoughtbot. What I've loved
                most has been working with a humble group of curious people who
                challenge each other to rise up.
              </p>
              <p>
                Outside of my professional design practice, I draw, paint, and write —
                all of which translates into my illustrations, comics and graphic
                narratives. I'm currently working on an autobiographical graphic
                memoir chronicling how my immigrant family and I co-created our American
                identity across our generational differences.
              </p>
              <p>
                Born and raised in Los Angeles, I became a first-generation
                college graduate in my family when I graduated from Wesleyan
                University with a B.A. in American Studies with an emphasis
                on Race and Ethnic Studies. I got into design by making posters
                for my friend's theater shows and club meetings. I wondered
                what it would be like to bring graphic design to the web — and
                that's how I got into web design, which led me to UX,
                interaction, and product design. The rest is history.
              </p>
            </article>
            <article class="order-1 md:order-2">
            <table class="font-sans-text">
              <tr>
                <td>
                  Location
                </td>
                <td>
                  Los Angeles, CA
                </td>
              </tr>
              <tr>
                <td>
                  Work
                </td>
                <td>
                  Product Design Lead at New Product Experimentation, Facebook
                </td>
              </tr>
              <tr>
                <td>
                  Astrology
                </td>
                <td>
                  Aries Sun, Scorpio Rising, Virgo Moon
                </td>
              </tr>
              <tr>
                <td>
                  Reading
                </td>
                <td>
                  Algorithms  of Oppression by Safiya Umoja
                </td>
              </tr>
              <tr>
                <td>
                  Materials
                </td>
                <td>
                  Figma, gouache, brush pen, Moleskine paper
                </td>
              </tr>
            </table>
            </article>
          </div>
        </section>
      </section>
    </section>
    <Footer />
  </Layout>
)

export default About
