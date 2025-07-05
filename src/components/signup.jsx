

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Link,
  Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedEmail", email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage("Password must be at least 6 characters long and contain at least one letter and one number.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }


    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    console.log("Form submitted and saved to localStorage");

    
    navigate("/signin");
  };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 3 }}
            >
              Sign Up
            </Button>
          </form>

          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Link href="/signin" underline="hover" sx={{ mx: 1 }}>
              Already Have an Account?
            </Link>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignUp;
