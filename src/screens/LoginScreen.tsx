import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (email) {
      navigate("/questions");
      toast.success("Login Successfully!");
    } else {
      toast.error("Please Enter Your Email");
      return;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component={"h1"} variant="h5">
          Login
        </Typography>
        <Box onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
        </Box>
      </Box>
      <Toaster />
    </Container>
  );
};
export default LoginScreen;
