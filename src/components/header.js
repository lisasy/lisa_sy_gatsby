import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header class="site_header">
    <div class="site_header_container">
      <h1 class="site_header_logo header_title_h3">
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      <nav class="site_header_nav">
        <ul>
          <li>
            <Link to={`/work/`}>
              Work
            </Link>
          </li>
          <li>
            <a href="https://lisasy.bigcartel.com/" target="_blank" rel="noopener noreferrer">
              Shop
            </a>
          </li>
          <li>
            <Link to={`/writing/`}>
              Writing
            </Link>
          </li>
          <li>
            <Link to="/about/">
              About
            </Link>
          </li>
          <li>
            <a href="mailto:hello@lisasy.com">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
