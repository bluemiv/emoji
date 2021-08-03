module.exports = {
  siteMetadata: {
    title: `Emoji Set`,
    description: `Easily copy and paste emojis.`,
    author: `Taehong Kim`,
    siteUrl: `https://bluemiv.github.io/emoji/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      // options: {
      //   output: "/",
      // },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://bluemiv.github.io/emoji/",
        sitemap: "https://bluemiv.github.io/emoji/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
