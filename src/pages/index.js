import React from 'react'
import { Link } from 'gatsby'
import PortraitImage from '../components/portrait_image'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section class="index_container">
      <article class="index_section_container">
        <div class="col_primary">
          <h1 class="index_site_header"> 
            Crafting products, experiences, and stories using design and
            illustration.
          </h1>
          <p>
            Hello, I am a interdisciplinary digital designer and illustrator
            based in the San Francisco Bay Area in California.  Formerly at <a
              href="http://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> and <a
              href="http://thoughtbot.com" target="_blank" rel="noopener noreferrer">thoughtbot</a>, I'm
            currently seeking contract opportunities, and open to full-time
            opportunities for the right role.
          </p>
        </div>
        <div class="col_secondary">
          <figure>
            <PortraitImage />
          </figure>
        </div>
      </article>

      <article class="index_section_container quotation">
        <figure>
          <blockquote>
            The precise role of the artist, then, is to illuminate that
            darkness, blaze roads through that vast forest, so that we will
            not, in all our doing, lose sight of its purpose, which is, after
            all, to make the world a more human dwelling place.
          </blockquote>
          <figcaption>
            James Baldwin
          </figcaption>
        </figure>
      </article>
    </section>
  </Layout>
)

export default IndexPage
