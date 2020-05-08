/**
 * @author Richard Poulson
 * @version 0.1.0
 * @todo Configure to use react-router-dom
 */

import React from 'react';
import clsx from 'clsx';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Omit } from '@material-ui/types';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment'; // projects
import SchoolIcon from '@material-ui/icons/School'; // education
import WorkIcon from '@material-ui/icons/Work'; // work experience

import Content from './Content';
import EducationContent from './EducationContent';
import WorkContent from './WorkContent';
import ProjectsContent from './ProjectsContent';
import styles from '../styles/navigatorStyles';

/**
 * Interface for a Navigator link.
 * @param id - Unique name representing link.
 * @param icon - JSX.Element
 * @param content - JSX.Element
 */
export interface INavigatorLink {
  id: string;
  icon: JSX.Element;
  content: JSX.Element;
  active?: boolean;
}

/**
 * Interface for the properties argument of the Navigator function component.
 * @param onLinkClick - Function triggered when link clicked: (content: INavigatorLink) => void;
 * @param [imageMap] - Map from image filename to optimized Gatsby image component.
 * @param [queryData] - Data object return from GraphQL query at build time.
 * @param classes - ClassNameMap<ClassKeyOfStyles<StylesOrClassKey>>
 * @param theme - Material-UI theme.
 */
export interface INavigator extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {
  onLinkClick: (content: INavigatorLink) => void;
  imageMap?: Map<string, string>;
  queryData?: Object;
}

function Navigator(props: INavigator) {
  const { classes, imageMap, queryData: data, onLinkClick, ...other } = props;
  const [ activeLinkItem, setActiveLinkItem ] = React.useState('Experience')
  const handleListItemClick = (item: INavigatorLink) => {
    setActiveLinkItem(item.id)
    props.onLinkClick(item)
  };

  let categories = [
    {
      id: 'History',
      children: [
        { id: 'Experience', icon: <WorkIcon />, content: <WorkContent queryData={data} imageMap={imageMap} />},
        { id: 'Education', icon: <SchoolIcon />, content: <EducationContent queryData={data} imageMap={imageMap} />},
        { id: 'Projects', icon: <AssignmentIcon />, content: <ProjectsContent queryData={data} imageMap={imageMap} />},
      ],
    },
  ];

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <Typography variant="h6">
            Richard Poulson
          </Typography>
        </ListItem>
        <Divider variant='middle'/>
        {/* For each link category in the categories object, map to a ListItemText. */
        categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText classes={{ primary: classes.categoryHeaderPrimary, }} >
                {id}
              </ListItemText>
            </ListItem>
              {/* For link in a link category, map to a ListItemIcon and a ListItemText, setting onClick to onLinkClick prop. */
              children.map(({ id: childId, icon: childIcon, content: childContent }) => (
                <ListItem
                  key={childId}
                  button
                  className={/* Get class name for item, also  */
                    clsx(classes.item, (childId == activeLinkItem) && classes.itemActiveItem)
                  }
                  onClick={() => handleListItemClick({id: childId, icon: childIcon, content: childContent})}
                  selected={activeLinkItem == childId}
                >
                  <ListItemIcon className={classes.itemIcon}>{childIcon}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemPrimary, }} >
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);
