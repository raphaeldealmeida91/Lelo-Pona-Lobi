import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "70vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50%",
            backgroundColor: "#CEDEFF",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "4%",
            left: "10%",
            width: "500px",
            height: "500px",
            backgroundColor: "#E1F9EA",
            zIndex: 1,
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "27%",
            left: "19%",
            width: "250px",
            height: "250px",
            backgroundColor: "#CEDEFF",
            zIndex: 1,
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: { md: "35%", sm: "40%", xs: "30%" },
            zIndex: 2,
            maxWidth: "900px",
            px: 4,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgb(39, 30, 89)",
              mb: 3,
              textAlign: "center",
              fontSize: {
                xs: "28px",
                md: "48px",
              },
            }}
          >
            Oups ! La page que vous cherchez n'existe pas.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              width: "205px",
              borderRadius: "8px",
              fontWeight: "bold",
              border: "1px solid rgb(39, 30, 89)",
              backgroundColor: "#FFE084",
              textAlign: { md: "left", xs: "center" },
              color: "#000",
              mt: 2,
            }}
          >
            Retour à l'accueil
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
