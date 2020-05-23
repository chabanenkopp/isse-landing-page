module.exports = {
  siteMetadata: {
    title: `ISSE`,
    description: `International Spring Seminar on Electronics Technology, 2020. Demänovska Valley, Slovakia. TUKE`,
    author: `@gatsbyjs`,
    image: 'src/assets/logo.png',
    siteUrl: `https://isse2020-d8b33.firebaseapp.com/`, // has to be a real production address
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/page-2/'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
   
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-source-sanity-transform-images`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'v2y5kzcg',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        token: '', // TODO add token from console
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
  ],
}
