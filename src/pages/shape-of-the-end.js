import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import SiteNav from '../components/site_nav'
import Footer from '../components/footer'

// Webpack Assets
import shapeCover from "../images/shape-end-cover.jpg"

const ShapeOfTheEnd = ({data}) => {
  return (
    <Layout>
      <SEO 
        title="Shape of the End by Lisa Sy"
        description="A quarantine comic (December 2020)"
        image={shapeCover}
      />
    <section class="comic--page">
      <SiteNav />
      <section class="page--container container p-0">
        {data.allFile.edges.map(image => (
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt="Shape of the End"
            />
          )
        )}

        <h3 class="mt-6">
          SHAPE OF THE END, a quarantine comic by Lisa Sy.
        </h3>
        <p>
          For awhile, we could not see the end...
        </p>
        <p>
          For awhile, I was more preoccupied with the
          shape of towering eucalyptus trees guarding slanted grassy horizons,
          dotted with masked people and (unmasked) dogs. Hesitantly on my
          skateboard, I stared down and worked my way around the free throw
          line. I stared down until I felt my body begin to glide. For awhile,
          the shape of the “curve” looked like a pacific sunset wave. In the
          summer, I’d come here and watch the horizon into darkness.
        </p>
        <p>
        By winter, the “curve” skated upwards. More
        people caught it. More people died from it. We were warned about this
        the entire time. Mostly I saw the shape of the fours corners of my
        apartment. On the 212th morning, I woke up again to two pairs of
        jagged black ears — those belonging to the kittens I adopted during
        this time.
        </p>
        <p>
        I miss seeing the shape of a human I adore on
        a morning like this. It won’t be too long. A shape is made by seeing
        what it is *not*. If I can see shape of the end, then I can also
        start to see the shape of a new beginning. It’s close enough.
        </p>
      </section>
    </section>
    <Footer />
  </Layout>
  )
}

export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "shape-of-the-end"}}, sort: {fields: name}) {
    edges {
      node {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default ShapeOfTheEnd
