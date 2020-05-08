/**
 * @author Richard Poulson <contact@richardpoulson.com>
 * @version 0.1.0
 */


import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container, { ContainerProps } from '@material-ui/core/Container';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import CustomizedCard from './CustomizedCard';
import styles from '../styles/workContentStyles';

export interface WorkContentProps extends Omit<ContainerProps, 'classes'>, WithStyles<typeof styles> {
  imageMap?: Map<string, string>;
  queryData?: Object;
}

function WorkContent(props: WorkContentProps) {
  /*
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
  */
  const { classes, imageMap, queryData: data, ...other } = props;
  var workExperience = require('../data/work-data.json');

  return (
    <Container {...other} className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="baseline" spacing={3}>
        {workExperience.map((item) => (
          <Grid item key={item} xs={12} sm={12} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              title={item.title}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
              image={imageMap.get(item.image)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(WorkContent);