import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';

const FooterIndex = () => {
  return (
    <footer class="site_footer index">
      <section class="site_footer_inner_content">
        <span class="footer__attribution">
          This site is made with <strong>Gatsby.js</strong> and hosted on Netlify. <br />
          All <a href="https://github.com/lisasy/lisa_sy_gatsby" target="_blank">design and development</a> by Lisa Sy. ♥️
        </span>
        <ul class="footer__contact-info">
          <li>
            <a href="http://twitter.com/lisasy" target="_blank"> Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lisasy/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="http://instagram.com/lisasyart" target="_blank">Instagram</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default FooterIndex
