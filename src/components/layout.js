import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from "../images/favicon.ico"

import Footer from './footer'
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Lisa Sy is a product designer, illustrator, and artist based in California.' },
            { name: 'keywords', content: 'Lisa Sy, design, California' },
          ]}
        >
          <html lang="en" />
          <link rel="icon" href={favicon} />
          <link rel="stylesheet" href="https://use.typekit.net/nix0hnc.css" />
          <link rel="stylesheet" href="https://afeld.github.io/emoji-css/emoji.css" />
          <body className="body_container" />

        </Helmet>

        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
