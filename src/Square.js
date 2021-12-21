import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c9c9c9",
    },
  },
});

export default function Square(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={props.onClick}
        sx={{ color: "primary", fontSize: "40px", borderRadius: "0px" }}
      >
        {props.value}
      </Button>
    </ThemeProvider>
  );
}
