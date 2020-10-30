import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

type AppBar = {
  src: string;
  alt: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    link: {
      display: "flex",
      alignItems: "center",
    },
  })
);

function AppBar({ alt, src }: AppBar) {
  const classes = useStyles();
  return (
    <MuiAppBar position="static">
      <Toolbar className={classes.toolbar}>
        <a href="/" className={classes.link} title="To home page">
          <img src={src} alt={alt} height="48px" />
        </a>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
