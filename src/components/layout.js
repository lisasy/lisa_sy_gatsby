import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import favicon from "../images/favicon.ico"

import '../styles/global.css'
import '../stylesheets/main.css.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta property="og:type" content="website"></meta>

          <link rel="icon" href={favicon} />
          <link rel="stylesheet" href="https://use.typekit.net/nix0hnc.css" />
          <link rel="stylesheet" href="https://afeld.github.io/emoji-css/emoji.css" />
          <body className="body_container" />

        </Helmet>
        <SEO />

        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
