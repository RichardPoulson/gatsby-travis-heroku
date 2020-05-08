import {
  Theme,
  createStyles
} from '@material-ui/core/styles';

/** 
 * CSS classes for style rules for Navigator element.
 * @see {@link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js}
 * @see {@link https://material-ui.com/guides/typescript/#usage-of-withstyles Usage of withStyles - TypeScript - Material-UI}
 * */
const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(0.25),
    },
    categoryHeaderPrimary: {},
    divider: {
      marginTop: theme.spacing(2),
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
    },
    itemCategory: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    itemActiveItem: {
      //backgroundColor: '#000',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
  });

export default styles;