import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  border: `1px solid #1F3340`,
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  hover: "hsl(31, 23%, 74%)",
  active: "hsl(31, 12%, 59%)",
  palette: {
    error: "#F2545B",
    primary: "#FFFFFF",
    primaryContrast: "#1F3340",
    secondary: "#B7AA9B",
  },
};

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom: typeof theme;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: typeof theme;
  }
}

// Create a theme instance.
export const muiTheme = createMuiTheme({
  custom: theme,
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
    info: {
      main: theme.palette.secondary,
      contrastText: theme.palette.primaryContrast,
    },
  },
});
