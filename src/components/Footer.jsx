import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" className="footer mt-4 bg-dark text-white text-center p-3">
      <Container>
        <Typography variant="body2">© 2025 GroceryMart. All Rights Reserved.</Typography>
        <Typography variant="body2">
          <Link href="#" className="text-white" underline="hover">Privacy Policy</Link> |{" "}
          <Link href="#" className="text-white" underline="hover">Terms & Conditions</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;


