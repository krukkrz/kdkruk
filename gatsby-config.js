module.exports = {
  siteMetadata: {
      title: `kdkruk`,
    siteUrl: `https://www.kdkruk.pl`
  },
  plugins: [
      `gatsby-plugin-image`,
      "gatsby-plugin-sharp",
      `gatsby-plugin-styled-components`,
      "gatsby-transformer-sharp",
      {
          resolve: `gatsby-plugin-typescript`,
          options: {
              isTSX: true, // defaults to false
              jsxPragma: `jsx`, // defaults to "React"
              allExtensions: true, // defaults to false
          },
      },
      {
          resolve: "gatsby-plugin-netlify-cms",
          options: {
              modulePath: `${__dirname}/src/cms/cms.js`,
          },
      },
      {
          // keep as first gatsby-source-filesystem plugin for gatsby image support
          resolve: "gatsby-source-filesystem",
          options: {
              path: `${__dirname}/static/img`,
              name: "uploads",
          },
      },
      {
          resolve: "gatsby-source-filesystem",
          options: {
              path: `${__dirname}/src/contents`,
              name: "contents",
          },
      },
      {
          resolve: "gatsby-source-filesystem",
          options: {
              path: `${__dirname}/src/img`,
              name: "images",
          },
      },
      {
          resolve: "gatsby-transformer-remark",
          options: {
              plugins: [
                  {
                      resolve: "gatsby-remark-relative-images",
                      options: {
                          name: "uploads",
                      },
                  },
                  {
                      resolve: "gatsby-remark-images",
                      options: {
                          // It's important to specify the maxWidth (in pixels) of
                          // the content container as this plugin uses this as the
                          // base for generating different widths of each image.
                          maxWidth: 2048,
                      },
                  },
                  {
                      resolve: "gatsby-remark-copy-linked-files",
                      options: {
                          destinationDir: "static",
                      },
                  },
              ],
          },
      },
      "gatsby-plugin-netlify",
  ]
};