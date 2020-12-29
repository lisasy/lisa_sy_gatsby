module.exports = {
  siteMetadata: {
    title: "Lisa Sy",
    titleTemplate: "%s · Designer & Artist",
    description: "Lisa Sy is a product designer, illustrator, and visual artist.",
    keywords: "Lisa Sy, lisa, design, product design, illustration, illustrator, artist, Los Angeles, CA",
    url: "https://lisasy.com/",
    image: "/static/hero_3-9585aeb60e0ad871f4e315aa5776a3c5.jpg",
    twitterUsername: "@lisasy",
  },

  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-image',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-30331708-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/illustration`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `journal-items`,
        path: `${__dirname}/src/journal-items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              showCaptions: true
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 960
            },
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
        icons: []
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'fjj2fpt'
        }
      }
    }
  ],
}
