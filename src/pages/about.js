import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout.js';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childrenImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="More About This Site"
      description="More information about this site."
    >
      <GatsbyImage image={getImage(data.file)} alt="cocktail" />
      <h1>About Frontend Masters</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
