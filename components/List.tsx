import React, { ReactNode } from "react";
import MuiList from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

type List = {
  children: ReactNode;
};

export default function List({ children }: List) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <MuiList>{children}</MuiList>
      </Grid>
    </Grid>
  );
}
