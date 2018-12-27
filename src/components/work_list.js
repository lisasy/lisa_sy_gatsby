import React from 'react'
import { graphql } from 'gatsby'

const WorkCard = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    {posts.map (({node: post}) => {
      const {frontmatter} = post;
      const {fields} = post;
      const cardImage = frontmatter.card_image.childImageSharp.fixed.src;
      return (

      )
    }
    )}
  )
}
