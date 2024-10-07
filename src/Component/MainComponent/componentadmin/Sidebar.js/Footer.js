import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#B0BEC5',
        color: 'black',
        p: 2,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        <a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a> | 
        <a href="/terms" style={{ color: 'white', textDecoration: 'none' }}> Terms of Service</a>
      </Typography>
    </Box>
  );
};

export default Footer;
