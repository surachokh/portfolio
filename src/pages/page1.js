import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Page1 extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          alignItems: "space-around",
          backgroundColor: "#000123",
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 0.5, alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingLeft: 20,
            }}
          >
            <Typography sx={{ color: "white", fontSize: 64 }}>
              Portfolio
            </Typography>
            <Typography sx={{ color: "white", fontSize: 96 }}>
              Software
            </Typography>
            <Typography sx={{ color: "white", fontSize: 96 }}>
              Engineer
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexGrow: 0.5, alignItems: "center" }}>
            <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'end', paddingRight: 20}}>
            <Typography sx={{ color: "white", fontSize: 96  }}>Surachok Hemadhulin</Typography>
            </Box>
        </Box>
      </Box>
    );
  }
}
