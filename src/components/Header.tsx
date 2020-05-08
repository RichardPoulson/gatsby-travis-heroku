/**
 * @author Richard Poulson
 * @version 0.1.0
 */

import React from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '../styles/headerStyles';

interface HeaderProps extends Omit<AppBarProps, 'classes'>, WithStyles<typeof styles> {
  onDrawerToggle: () => void;
  toolbarHeading: string;
}

/**
 * 
 * @param onDrawerToggle - test
 * @param toolbarHeading - header for the toolbar
 */
function Header(props: HeaderProps) {
  const { classes, onDrawerToggle, toolbarHeading, ...other } = props;

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0} {...other}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item>
              <Typography color="inherit" variant="h5" component="h1">
                {props.toolbarHeading}
              </Typography>
              </Grid>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
