/**
 * @author Richard Poulson <contact@richardpoulson.com>
 * @version 0.1.0
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container, { ContainerProps } from '@material-ui/core/Container';
import {
    withStyles,
    WithStyles
} from '@material-ui/core/styles';

import CustomizedCard from './CustomizedCard';
import styles from '../styles/projectsContentStyles';

/** Interface of ProjectsContent.
 * @param [imageMap] - Map from image filenames to optimized Gatsby object components.
 * @param [queryData] - Data returned from a GraphQL query at build time. 
 */
export interface IProjectsContent extends Omit<ContainerProps, 'classes'>, WithStyles<typeof styles> {
  imageMap?: Map<string, string>;
  queryData?: Object;
}

/** Maps each project inside JSON file to a CustomizedCard, returns cards inside a Grid inside a Container. */
function ProjectsContent(props: IProjectsContent) {
  const { classes, imageMap, queryData: data, ...other } = props;
  var projects = require('../data/project-data.json');

  return (
    <Container {...other} className={classes.root} >
      <Grid container direction="row" justify="space-evenly" alignItems="baseline" spacing={3}>
        {projects.map((item) => (
          <Grid item key={item} xs={12} sm={12} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              title={item.title}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
              image={imageMap.get(item.src)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(ProjectsContent);