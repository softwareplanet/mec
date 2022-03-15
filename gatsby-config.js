module.exports = {
  siteMetadata: {
    title: `Stop orda`,
    siteUrl: `https://stop-orda.netlify.app/`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
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
    "gatsby-transformer-remark",
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
        start_url: `/`,
        background_color: `#F5F5F5`,
        theme_color: `#F5F5F5`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: 'none',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*/*`],
        workboxConfig: {
          globPatterns: ['**/src/images/icon.png*']
       }
      },
    }
  ]
}
