import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Link,
  Alert,
  CssBaseline,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    console.log("Reset Password Request Submitted", email);
  };

  return (
    <>
      <CssBaseline />
      
      
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Box textAlign="center" mb={3}>
          <LockResetIcon sx={{ fontSize: 40, color: "green" }} />
          <Typography variant="h4" gutterBottom>
            Forgot Password
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            label="Enter your Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, backgroundColor: "green", "&:hover": { backgroundColor: "#388e3c" } }}
          >
            Reset Password
          </Button>
        </form>
      </Container>

      
     
    </>
  );
}

export default ForgotPassword;


