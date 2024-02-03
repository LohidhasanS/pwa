import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuestionsScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    navigate("/success-screen");
  };
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "right",
        }}>
        <Typography variant="h4" sx={{ padding: 2 }}>
          Safety Questions
        </Typography>
        <Typography variant="h6">
          1.What Safety measures do you currently take?
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="question1"
          autoFocus
        />
        <Typography variant="h6">
          2.Have you ever been involved in an accident or near a hazardous
          situation?
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="question2"
          autoFocus
        />
        <Typography variant="h6">
          3.If so, please describe the circumstances and what happened.
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="questions3"
          autoFocus
        />
        <Typography variant="h6">
          4.Do you feel you've received effective safety training?
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="question4"
          autoFocus
        />
        <Typography variant="h6">
          5.How do you determine what protective gear you need?
        </Typography>
        <TextField
          margin="normal"
          autoFocus
          id="question5"
          fullWidth
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}>
          Submit Your Answers
        </Button>
      </Box>
    </Container>
  );
};
export default QuestionsScreen;
