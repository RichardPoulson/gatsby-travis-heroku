import {
  Theme,
  createStyles
} from '@material-ui/core/styles';

/** 
 * CSS classes for style rules.
 * @see {@link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js}
 * @see {@link https://material-ui.com/guides/typescript/#usage-of-withstyles Usage of withStyles - TypeScript - Material-UI}
 * */
const styles = (theme: Theme) =>
  createStyles({
    paper: {
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
    cardGrid: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  });

export default styles;