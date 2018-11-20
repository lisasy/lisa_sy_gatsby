import React from 'react'

const Footer = () => {
  return (
    <footer class="site_footer">
      <div class="site_footer_container">
        <section class="site_footer_container_wrapper">
          <div class="col_primary">
            <p>
              This <a href="http://github.com/lisasy/lisasy.github.io"
                      target="_blank" rel="noopener noreferrer">site</a> was made using <a
                      href="https://gatsbyjs.org/"
                      target="_blank">Gatsby.js</a> and is hosted on <a
                      href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.
                    All design and development created by Lisa Sy.
            </p>
            <p>
              Last updated: Wednesday, October 30, 2018
            </p>
          </div>

          <div class="col_secondary site_footer_nav_container">
            <nav class="site_footer_nav">
              <ul>
                <li>
                  <a href="/work">Work</a>
                </li>
                <li>
                  <a href="/writing">Writing</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="mailto:lisasyis@gmail.com" rel="noopener noreferrer">Contact</a>
                </li>
              </ul>
            </nav>

            <nav class="site_footer_nav">
              <ul>
                <li>
                  <a href="https://twitter.com/lisasy" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lisasy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/lisasy/" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/lisasyart/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
