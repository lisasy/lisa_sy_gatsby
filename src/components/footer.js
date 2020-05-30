import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer class="site_footer">
      <section class="site_footer_inner_content">
        <div class="row_container col_2">
          <span class="row_container_col">
            This site is made with Gatsby.js and hosted on Netlify. <br />
            All design and development by Lisa Sy. ♥️
          </span>
         <div class="row_container col_2">
          <span class="row_container_col">
            <ul class="social-contacts>
              <li>
                <a href="mailto:hello@lisasy.com">Email</a>
              </li>
              <li>
                <a href="http://twitter.com/lisasy" target="_blank">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lisasy/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="http://instagram.com/lisasyart" target="_blank">Instagram</a>
              </li>
            </ul>
          </span>
        </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
