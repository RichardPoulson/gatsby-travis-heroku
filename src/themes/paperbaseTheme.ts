import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green'

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  typography: {
    fontFamily: 'Avenir Next, sans-serif',
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: theme.palette.primary.dark,
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiDrawer: {
      paper: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiListItem: {
      root: {
        color: theme.palette.common.white,
      },
      button: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.32)',
        },
      },
      selected: {
        backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.dark+ '88'}, ${theme.palette.secondary.main+ '88'}, ${theme.palette.secondary.light+ '88'})`,
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiToolbar: {
      root: {
        margin: theme.spacing(1),
      }
    },    
    MuiTooltip: {
      tooltip: {
        borderRadius: 8,
      },
    },
  },
};
theme = responsiveFontSizes(theme);

export default theme;