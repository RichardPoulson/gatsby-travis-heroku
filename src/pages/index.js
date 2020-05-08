import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Paperbase from '../components/Paperbase';
import theme from '../themes/paperbaseTheme'; // MUI theme

/** @see {@link https://www.gatsbyjs.org/docs/static-query/ Querying Data in Components using StaticQuery | Gatsby} */
export default function Index() {
  const queryData = useStaticQuery(graphql`
    query {
      images: allFile(filter: {ext: {regex: "/(jpe?g|tiff?|svg|png|gif)/"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `);

  /** 
   * Maps image filenames to Gatsby image components. 
   * @see {@link https://www.gatsbyjs.org/docs/gatsby-image/#gatsby-image-starts-with-a-query Gatsby Image API | GatsbyJS}
   */
  let imageMap = new Map();
  queryData.images.edges.map(
    ({ node }) => imageMap.set(node.relativePath, node.childImageSharp.fluid.src)
  );

  return (
      <Paperbase
        theme={theme}
        imageMap={imageMap}
        queryData={queryData}
      />
  );
}