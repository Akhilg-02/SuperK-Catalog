import React from 'react';
import { Typography, Box } from '@mui/material';
const Footer = () => (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#1976d2", // Material UI primary color
        color: "white",
        textAlign: "center",
        py: 2,
        boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="body2">© 2025 Store Catalog. All rights reserved.</Typography>
    </Box>
);
export default Footer;