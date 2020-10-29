import React, { ReactNode } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <Container maxWidth="xl">{children}</Container>;
};

export default Wrapper;
