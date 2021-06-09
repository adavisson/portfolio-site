module.exports = {
  siteMetadata: {
    title: 'Portfolio Site',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.tsx`),
      },
    },
  ],
};
