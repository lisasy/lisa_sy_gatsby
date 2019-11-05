import React, { Component } from 'react'
import { Link } from 'gatsby'

class SiteNavDark extends Component {

  state = { showMobileMenu: false }
  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  }

  render() {
    const mobileMenuActive = this.state.showMobileMenu ? 'is-active' : '';

    return (
      <header class="site_header dark">
        <div className="site_menu__mobile">
          <h1 class="site_menu__logo">
            <Link to="/" >
              Lisa Sy
            </Link>
          </h1>
          <a href="" class="nav_toggle" role="button" aria-expanded="false"
            aria-controls="menu" onClick={this.toggleMobileMenu}>
            <svg class="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
              <title>Toggle Menu</title>
              <g>
                <line class="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                <line class="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
              </g>
            </svg>
          </a>
        </div>

        <nav className={mobileMenuActive + " site_menu"} id="nav">
          <div class="site_menu__pages container">
            <h1 class="site_menu__logo">
              <Link to="/" >
                Lisa Sy
              </Link>
            </h1>
            <ul>
              <li className="page__index">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/#work`}>
                  Work
                </Link>
              </li>
              <li>
                <a href="http://lisasy.bigcartel.com" target="_blank" rel="noopener noreferrer">
                  Shop
                </a>
              </li>
              <li>
                <a href="mailto:hello@lisasy.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default SiteNavDark
