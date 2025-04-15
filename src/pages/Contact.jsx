import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TiktokIcon from "../assets/tiktok.svg";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
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
        <IconButton
          sx={{ position: "absolute", bottom: "15%", zIndex: 555 }}
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/leloponalobi/?igsh=enZ5Y3FvbHRwYXlk#"
        >
          <InstagramIcon sx={{ fontSize: "32px", color: "rgb(39, 30, 89)" }} />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            bottom: "15%",
            left: { md: "55%", xs: "60%" },
            zIndex: 555,
          }}
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tiktok.com/@leloponalobi?_t=ZN-8uwi17f1Oic&_r=1"
        >
          <Box
            component="img"
            alt="icon"
            src={TiktokIcon}
            sx={{ color: "rgb(39, 30, 89)", width: "32px", height: "32px" }}
          />
        </IconButton>
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
            Contact
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          height: "60vh",
          backgroundColor: "#FFF",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <TextField
          id="email"
          name="email"
          placeholder="Email"
          label="Email"
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "80%", display: "flex" }}
        />
        <TextField
          id="object"
          name="object"
          placeholder="Objet"
          label="Objet"
          required
          fullWidth
          value={object}
          onChange={(e) => setObject(e.target.value)}
          sx={{ width: "80%", display: "flex" }}
        />
        <TextField
          id="message"
          name="message"
          placeholder="Message"
          label="Message"
          required
          fullWidth
          rows={4}
          multiline
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ width: "80%", display: "flex" }}
        />
        <Button
          variant="contained"
          sx={{
            width: "225px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "1px solid rgb(39, 30, 89)",
            backgroundColor: "#FFE084",
          }}
        >
          Envoyé un mail
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
