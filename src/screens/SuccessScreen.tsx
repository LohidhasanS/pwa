import { Box, Button, Container, Typography } from "@mui/material";
import Success from "./success.png";
import { useNavigate } from "react-router-dom";
const SuccessScreen = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <img src={Success} alt="img" />
        <Typography variant="h6">Thank You</Typography>
        <Typography variant="h6">
          Successfully Submitted Your Response
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}>
          Done
        </Button>
      </Box>
    </Container>
  );
};
export default SuccessScreen;
