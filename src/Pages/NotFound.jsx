import { Container, Typography, Box, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center ",
          height: "60vh",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          color={theme.palette.error.main}
          sx={{ fontSize: "30px", fontWeight: "800", textAlign: "center" }}
          variant="body1"
        >
          Not Found Page
        </Typography>
        <Typography
          color={theme.palette.error.main}
          sx={{ fontSize: "30px", fontWeight: "800" }}
          variant="body1"
        >
          404
        </Typography>
        <Button
          sx={{ width: "30%" }}
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
