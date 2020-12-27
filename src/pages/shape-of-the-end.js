import React from 'react'
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import SiteNav from '../components/site_nav'
import Footer from '../components/footer'

// Webpack Assets
import shapeP1 from "../images/shape-of-the-end/shape-end_p1@0.5x.jpg"
import shapeP2 from "../images/shape-of-the-end/shape-end_p2@0.5x.jpg"
import shapeP3 from "../images/shape-of-the-end/shape-end_p3@0.5x.jpg"
import shapeP4 from "../images/shape-of-the-end/shape-end_p4@0.5x.jpg"

const ShapeOfTheEnd = () => {
  return (
    <Layout>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Shape of the End by Lisa Sy</title>
        <link rel="canonical" href="http://lisasy.com/shape-of-the-end" />
        </Helmet>
    <section class="comic--page">
      <SiteNav />
      <section class="page--container container p-0">
        <img src={shapeP1} alt="SHAPE OF THE END, a quarantine comic by Lisa Sy. For awhile, we could not see the end..." />
        <img src={shapeP2} alt="For awhile, I was more preoccupied with the
        shape of towering eucalyptus trees guarding slanted grassy horizons,
        dotted with masked people and {unmasked} dogs. Hesitantly on my
        skateboard, I stared down and worked my way around the free throw
        line. I stared down until I felt my body begin to glide. For awhile,
        the shape of the “curve” looked like a pacific sunset wave. In the
        summer, I’d come here and watch the horizon into darkness." />
        <img src={shapeP3} alt="By winter, the “curve” skated upwards. More
        people caught it. More people died from it. We were warned about this
        the entire time. Mostly I saw the shape of the fours corners of my
        apartment. On the 212th morning, I woke up again to two pairs of
        jagged black ears — those belonging to the kittens I adopted during
        this time." />
        <img src={shapeP4} alt="I miss seeing the shape of a human I adore on
        a morning like this. It won’t be too long. A shape is made by seeing
        what it is *not*. If I can see shape of the end, then I can also
        start to see the shape of a new beginning. It’s close enough." />
      </section>
    </section>
    <Footer />
  </Layout>
  )

}

export default ShapeOfTheEnd
