import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer class="site_footer">
      <section class="site_footer_inner_content">
        <header class="row_container">
          <h2 class="row_container_col">
            Let's work on something special together. 🤝
          </h2>
        </header>
        <div class="row_container col_2">
          <p class="row_container_col paragraph_larger">
            You can reach me at <em>hello@lisasy.com</em>.
            <br />
            Also find me on <a href="https://twitter.com/lisasy" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://www.instagram.com/lisasyart/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.linkedin.com/in/lisasy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, and <a href="https://github.com/lisasy/" target="_blank" rel="noopener noreferrer">Github</a>.
          </p>
          <p class="row_container_col paragraph_larger">
            This <a href="http://github.com/lisasy/lisasy.github.io"
        target="_blank" rel="noopener noreferrer">site</a> is made with <a
        href="https://gatsbyjs.org/"
        target="_blank" rel="noopener noreferrer">Gatsby.js</a> and hosted on <a
        href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.
        All design and development created by Lisa Sy. ♥️
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
