import { ThemeProvider, createTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4"

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
          <Page3 />
          <Page4 />
        </Box>
      </ThemeProvider>
    );
  }
}
