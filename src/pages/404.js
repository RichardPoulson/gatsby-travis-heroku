import React from "react"

import { graphql, useStaticQuery } from 'gatsby';

import Paperbase from '../components/Paperbase'

import theme from '../themes/paperbaseTheme'; // MUI theme
import SEO from "../components/seo"

export default function NotFoundPage() {
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
    <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  );
}
