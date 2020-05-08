import {
  Theme,
  createStyles
} from '@material-ui/core/styles';

const drawerWidth = 240;
/** 
 * CSS classes for style rules.
 * @see {@link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js}
 * @see {@link https://material-ui.com/guides/typescript/#usage-of-withstyles Usage of withStyles - TypeScript - Material-UI}
 * */
const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
});

export default styles;