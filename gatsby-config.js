const { resolve } = require('path');

module.exports = {
    siteMetadata: {
        title: `Meqd`,
        siteUrl: `https://militarydirectory.app`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-source-local-git-modern',
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                remarkPlugins: [
                    [require('remark-oembed'), { syncWidget: true }],
                ],
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/equipment/`,
                name: 'equipments',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/markdowns/`,
                name: 'privacy-policy',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Meqd`,
                short_name: `Meqd`,
                start_url: `/`,
                background_color: `#F5F5F5`,
                theme_color: `#F5F5F5`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                cache_busting_mode: 'none',
                crossOrigin: `use-credentials`,
                icons: [
                    {
                        src: 'public/icons/icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: 'public/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: 'public/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        },
        `gatsby-plugin-remove-serviceworker`,
        {
            resolve: 'local-search-plugin',
            options: {
                languages: ['uk'],
                type: 'Mdx',
                fields: [
                    {
                        name: 'title',
                        indexed: true,
                        attributes: {
                            encode: false,
                        },
                        resolver: 'frontmatter.title',
                        store: true,
                    },
                    {
                        name: 'slug',
                        indexed: false,
                        resolver: node =>
                            node.fileAbsolutePath
                                .split('/')
                                .slice(-3, -1)
                                .join('/') + '/',
                        store: true,
                    },
                ],
            },
        },
    ],
};
