import { Typography } from "@mui/material";

export const TextBody = ({
  text,
  isWhite = false,
  isCenter = false,
  isLeft = false,
}) => {
  const handleTextAlign = () => {
    if (isCenter) {
      return "center";
    }
    if (isLeft) {
      return "left";
    }
    return { md: "left", xs: "center" };
  };
  return (
    <Typography
      sx={{
        textAlign: handleTextAlign,
        color: isWhite ? "#FFF" : "rgb(39, 30, 89)",
        mb: 6,
        width: { md: "80%", xs: "90%" },
        fontSize: {
          xs: "16px",
          md: "20px",
        },
      }}
    >
      {text}
    </Typography>
  );
};
