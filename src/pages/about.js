import React from 'react'
import Layout from '../components/layout'
import SiteNav from '../components/site_nav'
import Footer from '../components/footer'

const About = () => (
  <Layout>
    <section class="about">
      <SiteNav />
      <section class="page--container container">
        <div class="col_3">
          <article class="span--2-3">
            <header class="page--header">
              <h1 class="h1_jumbo">
                Hi, I'm <em class="flipped">Lisa Sy</em>, and I'm a digital
  product designer, illustrator, and artist based in Los
  Angeles, CA.
              </h1>
            </header>
            <p class="paragraph--larger">
              For almost a decade, I've gotten to work as a designer at places
  like Dropbox, Facebook, thoughtbot, and now, <a href="http://forem.com" target="_blank" rel="noreferrer">Forem</a>. I've worked at both large
  companies, small startups, and everything in-between. What I've loved most has
  been working with a humble group of curious people who challenge each other to
  rise up.
            </p>
            <p class="paragraph--larger">
              Outside of my professional design practice, I draw, paint, and write —
              all of which translates into my illustrations, comics and graphic
              narratives. I'm currently working on an autobiographical graphic
              memoir chronicling how my immigrant family and I co-created our American
              identity across our generational differences.
            </p>
            <p class="paragraph--larger">
              Born and raised in Los Angeles, I became a first-generation college
              graduate in my family when I graduated from <a
              href="https://www.wesleyan.edu/amst/" target="_blank" rel="noopener
              noreferrer">Wesleyan University with a B.A. in American Studies</a> with an
              emphasis on Race and Ethnic Studies. I got into design by making posters for
              my friend's theater shows and club meetings. I wondered what it would be like
              to bring graphic design to the web — and that's how I got into web design,
              which led me to UX, interaction, and product design. The rest is history.
            </p>
          </article>
        </div>
      </section>
    </section>
    <Footer />
  </Layout>
)

export default About
