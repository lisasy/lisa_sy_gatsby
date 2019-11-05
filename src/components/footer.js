import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer class="site_footer">
      <section class="site_footer_container">

        <h2 class="footer_message">Let's work on something special together.</h2>


              <div class="column_left">
                  <nav>
                    <h4 class="list_link_title">Let's connect</h4>
                    <p class="large">hello@lisasy.com</p>

                    <ul class="social_links">
                      <li>
                        <a href="https://twitter.com/lisasy" target="_blank" rel="noopener noreferrer">
                            <SocialIcon network="twitter" bgColor="#ffffff" style={{ height: 32, width: 32}} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/lisasy/" target="_blank" rel="noopener noreferrer">
                          <SocialIcon network="linkedin" bgColor="#ffffff" style={{ height: 32, width: 32}} />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/lisasy/" target="_blank" rel="noopener noreferrer">
                          <SocialIcon network="github" bgColor="#ffffff" style={{ height: 32, width: 32}} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/lisasyart/" target="_blank" rel="noopener noreferrer">
                          <SocialIcon network="instagram" bgColor="#ffffff" style={{ height: 32, width: 32}} />
                        </a>
                      </li>
                    </ul>
                  </nav>
              </div>
              <p class="endnote">
                This <a href="http://github.com/lisasy/lisasy.github.io"
            target="_blank" rel="noopener noreferrer">site</a> is made with <a
            href="https://gatsbyjs.org/"
            target="_blank" rel="noopener noreferrer">Gatsby.js</a> and hosted on <a
            href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.
            All design and development created by Lisa Sy.
              </p>
      </section>
    </footer>
  )
}

export default Footer
