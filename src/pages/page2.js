import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';

export default class Page2 extends Component {
  render() {
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: 'center',
          backgroundColor: '#000123'
        }}
      >
        <Typography sx={{color: 'white'}}>Page 2</Typography>
      </Box>
    )
  }
}
