import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Content from './Content';
import Header from '../../Header';
import Footer from './Footer';

const Allcontent = () => {
    
  return (
    <><Header/>
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />

      {/* Header */}
     

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <Sidebar />
        
        {/* Content Area */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Content />
        </Box>
      </Box>

      {/* Footer */}
    
    </Box>
    <Footer/>
    </>
  );
};

export default Allcontent;
