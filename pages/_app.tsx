import React, { useEffect } from "react";
import Head from "next/head";
import {
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Paper } from "@material-ui/core";

import { muiTheme } from "../util";
import { AppBar, Wrapper } from "../components";

import "../styles/global.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
    },
  })
);

export default function App(props) {
  const classes = useStyles();
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove server-side CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <Head>
        <title>Everledger</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppBar />
      <Wrapper>
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Component {...pageProps} />
        </Paper>
      </Wrapper>
    </ThemeProvider>
  );
}
