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
          <meta property="og:title" content="Lisa Sy"></meta>
          <meta property="og:image" content="https://lisasy.com/static/hero_3-9585aeb60e0ad871f4e315aa5776a3c5.jpg"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:description" content="Lisa Sy is a product designer, illustrator, and artist based in California."></meta>

          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content="https://lisasy.com/"></meta>
          <meta property="twitter:title" content="Lisa Sy"></meta>
          <meta property="twitter:description" content="Lisa Sy is a product designer, illustrator, and visual artist."></meta>
          <meta property="twitter:image" content="https://lisasy.com/static/hero_3-9585aeb60e0ad871f4e315aa5776a3c5.jpg"></meta>

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
