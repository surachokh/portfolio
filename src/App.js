import { ThemeProvider, createTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
export default class App extends Component {
  render() {

    const theme = createTheme({
      typography: {
        fontFamily: [
          '"Prompt"',
          'sans-serif'
        ].join(','),
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <Box>
          <Page1 />
          <Page2 />
        </Box>
      </ThemeProvider>
    );
  }
}
