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
    root: {
      maxWidth: '600px',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandButton: {
      [theme.breakpoints.down('sm')]: {
        width: '32px',
        height: '32px',
      },
      [theme.breakpoints.up('md')]: {
        width: '48px',
        height: '48px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '64px',
        height: '64px',
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    media: {
      height: 0,
      paddingTop: '25%', // 16:9
    },
    supporting: {
      display: 'flex',
      margin: 'auto',
      alignItems: 'center',
      alignSelf: 'center',
    }
  });

export default styles;