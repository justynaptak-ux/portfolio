
module.exports = {
  siteMetadata: {
    title: "Justyna Ptak - portfolio",
    description: "Personal website of Justyna Ptak",
    author: "Justyna Ptak",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
