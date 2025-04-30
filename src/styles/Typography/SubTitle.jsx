import { Typography } from "@mui/material";

export const SubTitle = ({
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
        fontWeight: "bold",
        mb: 2,
        textAlign: handleTextAlign,
        color: isWhite ? "#FFF" : "rgb(39, 30, 89)",
        width: { md: "80%", xs: "100%" },
        fontSize: {
          xs: "24px",
          md: "48px",
        },
      }}
    >
      {text}
    </Typography>
  );
};
