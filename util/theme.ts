import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  palette: {
    error: "#F2545B",
    primary: "#FFFFFF",
    primaryContrast: "#1F3340",
    secondary: "#B7AA9B",
  },
};

// Create a theme instance.
export const muiTheme = createMuiTheme({
  palette: {
    text: { primary: theme.palette.primaryContrast },
    primary: {
      main: theme.palette.primary,
      contrastText: theme.palette.primaryContrast,
    },
    secondary: {
      main: theme.palette.secondary,
      contrastText: theme.palette.primaryContrast,
    },
    error: {
      main: theme.palette.error,
    },
    background: {
      default: theme.palette.primary,
      paper: theme.palette.primary,
    },
  },
});
