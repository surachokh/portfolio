import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import kbtgPicture from "../KBTG-logo-trans-square-web.png";

export default class Page3 extends Component {
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
            <img src={kbtgPicture} alt="KBTG" style={{ height: 450 }} />
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
            <Typography sx={{ color: "white", fontSize: 64 }}>
              Work experience
            </Typography>
            <br />
            <Typography sx={{ color: "white", fontSize: 24 }}>
              KBTG Group
            </Typography>
            <br />
            <Typography sx={{ color: "white", fontSize: 24 }}>
              I joined KBTG Group as software engineer for 1 year. My
              responsible is handle Front end development using Angular2 as a
              main language.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
