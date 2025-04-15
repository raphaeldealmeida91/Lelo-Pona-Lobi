import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/NavBar.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "150px",
          backgroundColor: "#96DFFE",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { md: "80%", xs: "90%" },
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            mt: { md: 0, xs: 2 },
            mb: { md: 0, xs: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: { md: "130px", xs: "100%" },
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "rgb(39, 30, 89)",
                mb: 2,
                textAlign: "left",
                fontSize: {
                  xs: "16px",
                  md: "20px",
                },
              }}
            >
              Lelo Pona Lobi
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "rgb(39, 30, 89)",
                mb: 2,
                width: "90%",
                textAlign: "left",
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },
              }}
            >
              Une promesse d’action, de solidarité, et de changement.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: { md: "130px", xs: "100%" },
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "rgb(39, 30, 89)",
                mb: 2,
                textAlign: "left",
                fontSize: {
                  xs: "16px",
                  md: "20px",
                },
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "rgb(39, 30, 89)",
                textAlign: "left",
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },
              }}
            >
              Contact@leloponalobi.org
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "rgb(39, 30, 89)",
                mb: 2,
                textAlign: "left",
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },
              }}
            >
              +33692841592
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: { md: "130px", xs: "100%" },
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "rgb(39, 30, 89)",
                mb: 2,
                textAlign: "left",
                fontSize: {
                  xs: "16px",
                  md: "20px",
                },
              }}
            >
              Information
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "rgb(39, 30, 89)",
                textAlign: "left",
                cursor: "pointer",
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },
              }}
            >
              FAQ
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "rgb(39, 30, 89)",
                textAlign: "left",
                cursor: "pointer",
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },
              }}
            >
              CGV
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "rgb(39, 30, 89)",
                mb: 2,
                textAlign: "left",
                cursor: "pointer",
                fontSize: {
                  xs: "15px",
                  md: "16px",
                },
              }}
            >
              Mention légale
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: { md: "130px", xs: "100%" },
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "rgb(39, 30, 89)",
                textAlign: "left",
                mb: 2,
                fontSize: {
                  xs: "16px",
                  md: "20px",
                },
              }}
            >
              Newsletter
            </Typography>
            <TextField
              id="email"
              name="email"
              placeholder="Email"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "80%", display: "flex", mb: 2 }}
              slotProps={{
                input: {
                  style: {
                    height: "40px",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: "125px",
                borderRadius: "8px",
                fontWeight: "bold",
                border: "1px solid rgb(39, 30, 89)",
                backgroundColor: "#FFE084",
                padding: 0,
                textTransform: "initial",
              }}
            >
              S'abonner
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#EAF8E8",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { md: "80%", xs: "90%" },
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            mt: { md: 0, xs: 1 },
            mb: { md: 0, xs: 1 },
          }}
        >
          <Typography
            sx={{
              fontWeight: "normal",
              color: "rgb(39, 30, 89)",
              textAlign: "center",
              width: "100%",
              fontSize: {
                xs: "16px",
                md: "18px",
              },
            }}
          >
            Copyright © 2025 Lelo Pona Lobi
          </Typography>
          <Typography
            sx={{
              fontWeight: "normal",
              color: "rgb(39, 30, 89)",
              textAlign: "center",
              width: "100%",
              fontSize: {
                xs: "16px",
                md: "18px",
              },
            }}
          >
            Tout droits réservé
          </Typography>
          <Typography
            sx={{
              fontWeight: "normal",
              color: "rgb(39, 30, 89)",
              textAlign: "center",
              width: "100%",
              fontSize: {
                xs: "16px",
                md: "18px",
              },
            }}
          >
            Lelo Pona Lobi
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
