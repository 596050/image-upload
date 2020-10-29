import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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

function AppBar() {
  const classes = useStyles();
  return (
    <MuiAppBar position="static">
      <Toolbar className={classes.toolbar}>
        <a href="/" className={classes.link}>
          <img
            src="/images/El_logo_colour_12.09.png"
            alt="logo"
            height="48px"
          />
        </a>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
