import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from "../images/favicon.ico"

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
          <meta property="og:title" content="Lisa Sy"></meta>
          <meta property="og:image" content="https://lisasy.com/static/hero_3-9585aeb60e0ad871f4e315aa5776a3c5.jpg"></meta>
          <meta property="og:description" content="<p>Lisa Sy is a product designer, illustrator, and artist based in California.</p>"></meta>
          <link rel="icon" href={favicon} />
          <link rel="stylesheet" href="https://use.typekit.net/nix0hnc.css" />
          <link rel="stylesheet" href="https://afeld.github.io/emoji-css/emoji.css" />
          <body className="body_container" />

        </Helmet>

        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
