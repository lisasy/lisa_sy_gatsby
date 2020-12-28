import React from 'react'
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import SiteNav from '../components/site_nav'
import Footer from '../components/footer'

// Webpack Assets
import twoMinutesCover from "../images/two-minutes/cover_widescreen.png"
import twoMinutesP1 from "../images/two-minutes/page_01.png"
import twoMinutesP2 from "../images/two-minutes/page_02.png"

const TwoMinutes = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Two Minutes by Lisa Sy"></meta>
        <link rel="canonical" href="http://lisasy.com/two-minutes" />
        <meta property="og:image" content={twoMinutesCover}></meta>
      </Helmet>
    <section class="comic--page">
      <SiteNav />
      <section class="page--container container p-0">
        <img src={twoMinutesP1} alt="" />
        <img src={twoMinutesP2} alt="" />
      </section>
    </section>
    <Footer />
  </Layout>
  )

}

export default TwoMinutes
