import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import scbPicture from "../Tech-X-logo_LightBG-1024x344 (1).png";

export default class Page4 extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "100vh",
          alignItems: "center",
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
            <img src={scbPicture} alt="KBTG" style={{ height: 200 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            maxWidth: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 0.5,
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#ff0f7b", fontSize: 64 }}>
              Work experience
            </Typography>
            <br />
            <Typography sx={{ color: "white", fontSize: 24 }}>
              SCB Tech X
            </Typography>
            <br />
            <Typography sx={{ color: "white", fontSize: 24 }}>
              I join SCB Tech X as a associate software engineer. My responsible
              is handle backend issue and onboarding config from partners of SCB
              using NodeJS.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
