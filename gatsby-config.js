module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "altercap demo",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
