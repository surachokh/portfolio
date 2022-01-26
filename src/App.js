import { Box } from "@mui/system";
import React, { Component } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
export default class App extends Component {
  render() {
    return (
      <Box>
        <Page1 />
        <Page2 />
      </Box>
    );
  }
}
