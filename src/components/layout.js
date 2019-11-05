import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from "../images/favicon.ico"

import SiteNav from './site_nav'
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
          <link rel="stylesheet" href="https://use.typekit.net/fjj2fpt.css" />
          <link rel="stylesheet" href="https://afeld.github.io/emoji-css/emoji.css" />
          <link href="https://fonts.googleapis.com/css?family=Archivo:400,600,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Spectral:400,700,800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Alegreya:400,500,800&display=swap" rel="stylesheet" />
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
