import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = ({data}) => {

  return (
    <Layout>
      <section class="page_container gallery">
        {data.GalleryImages.edges.map(({node}, index) => (
          <section class="gallery_item">
            <Img fluid={node.childImageSharp.fluid} />
          </section>
        ))}
      </section>
    </Layout>
  )

}

export const query = graphql`
  query GalleryQuery {
    GalleryImages: allFile ( filter: {sourceInstanceName: {eq: "gallery"}}) {
      edges {
        node {
          absolutePath
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Gallery
