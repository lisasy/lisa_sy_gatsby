import React from 'react'
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import SiteNav from '../components/site_nav'
import Footer from '../components/footer'

// Webpack Assets
import waitingCover from "../images/waiting/cover_widescreen.jpg"
import waitingP1 from "../images/waiting/Waiting_1.jpg"
import waitingP2 from "../images/waiting/Waiting_2.jpg"
import waitingP3 from "../images/waiting/Waiting_3.jpg"

const Waiting = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Waiting by Lisa Sy"></meta>
        <link rel="canonical" href="http://lisasy.com/waiting" />
        <meta property="og:image" content={waitingCover}></meta>
      </Helmet>
    <section class="comic--page">
      <SiteNav />
      <section class="page--container container p-0">
        <img src={waitingP1} alt="" />
        <img src={waitingP2} alt="" />
        <img src={waitingP3} alt="" />
      </section>
    </section>
    <Footer />
  </Layout>
  )

}

export default Waiting
