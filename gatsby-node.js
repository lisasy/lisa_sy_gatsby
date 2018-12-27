const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                type
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const pagePath = node.fields.slug;

        createPage({
          path: pagePath,
          component: path.resolve(`./src/templates/${String(node.frontmatter.type)}_item.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
