import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import profilePicture from '../0916 สุรโชค เหมะธุลิน (1).png'

export default class Page2 extends Component {
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
            <img src={profilePicture} alt="Profile" style={{height: 450}}/>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" , maxWidth: '100vh'}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: 'column',
              flexGrow: 0.5,
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "white", fontSize: 96 }}>
              About me
            </Typography>
            <Typography sx={{ color: "white", fontSize: 24 }}>
                I am software engineer that specialize on front end development. I graduated in Computer Engineering with 2.60 gpa. I am single and my military status is extempts. 
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
