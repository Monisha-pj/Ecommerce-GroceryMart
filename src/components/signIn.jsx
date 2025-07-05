
import React, { useState } from "react";
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

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const navigate = useNavigate();

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


    if (email === localStorage.getItem("userEmail") && password === localStorage.getItem("userPassword")) {
      console.log("Successfully signed in");
      navigate("/");
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign In
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
            {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 3 }}
            >
              Sign In
            </Button>
          </form>

          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Link href="/forgot-password" underline="hover" sx={{ mx: 1 }}>
              Forgot Password?
            </Link>
            <Link href="/signup" underline="hover" sx={{ mx: 1 }}>
              Don't have an Account? Sign Up
            </Link>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignIn;
