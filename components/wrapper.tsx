import React, { ReactNode } from "react";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "10px",
    },
  })
);

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
      {children}
    </Container>
  );
};

export default Wrapper;
