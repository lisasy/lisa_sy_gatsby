import React from 'react'

const Footer = () => {
  return (
    <footer class="site_footer container">
      <section class="site_footer_inner_content col_2">
        <span class="footer__attribution">
          This site is made with <strong>Gatsby.js</strong> and hosted on Netlify. <br />
          All <a href="https://github.com/lisasy/lisa_sy_gatsby" target="_blank" rel="noreferrer">design and development</a> by Lisa Sy. ♥️
        </span>
        <ul class="footer__contact-info">
          <li>
            <a href="http://twitter.com/lisasy" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lisasy/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="http://instagram.com/lisasyart" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
