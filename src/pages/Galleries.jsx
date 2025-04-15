import { Box, Typography } from "@mui/material";
import React from "react";

const Galleries = () => {
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
            top: "6%",
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
            top: "39%",
            zIndex: 2,
            maxWidth: "900px",
            px: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgb(39, 30, 89)",
              mb: 3,
              textAlign: "left",
              fontSize: {
                xs: "39px",
                md: "78px",
              },
            }}
          >
            Galleries
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Galleries;
