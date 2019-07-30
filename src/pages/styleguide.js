import React from 'react'
import Layout from '../components/layout'

const Styleguide = () => (
  <Layout>
    <div class="page_container_block">
      <h1>Header h1</h1>
      <h2>Header h2</h2>
      <h3>Header h3</h3>
      <h4>Header h4</h4>
      <h5>Header h5</h5>
      <h6>Header h6</h6>
      <p>
        Lorem ipsum dolor sit amet, <a href="/">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ul>
        <li>Apples</li>
        <li>Grapefruit</li>
        <li>Orange</li>
        <li>Watermelon</li>
      </ul>
      <ol>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
      </ol>
      <figure>
        <img src="" />
        <figcaption>Figure 3.2 caption text to describe the media</figcaption>
      </figure>
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
    </div>
  </Layout>
)

export default Styleguide
