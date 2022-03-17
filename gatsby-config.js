module.exports = {
  siteMetadata: {
    title: `Stop orda`,
    siteUrl: `https://stop-orda.netlify.app`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [
          [require('remark-oembed'), { syncWidget: true}]
        ]
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/equipment/`,
        name: 'equipments'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stop-orda`,
        short_name: `stop-orda`,
        start_url: `/index.html`,
        background_color: `#F5F5F5`,
        theme_color: `#F5F5F5`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index.html`, "/**/index.html"],
      }
    }
  ]
}
