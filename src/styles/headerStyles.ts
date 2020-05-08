import {
  Theme,
  createStyles
} from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';
/** 
 * CSS classes for style rules.
 * @see {@link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js}
 * @see {@link https://material-ui.com/guides/typescript/#usage-of-withstyles Usage of withStyles - TypeScript - Material-UI}
 * */
const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
  });

export default styles;