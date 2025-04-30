import { Button } from "@mui/material";

export const BtnSimple = ({ handleClick = () => {}, text }) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        width: "225px",
        borderRadius: "8px",
        fontWeight: "bold",
        border: "1px solid rgb(39, 30, 89)",
        backgroundColor: "#FFE084",
        color: "#000",
      }}
    >
      {text}
    </Button>
  );
};
