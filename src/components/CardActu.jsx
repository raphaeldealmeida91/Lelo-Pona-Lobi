import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const MultiActionAreaCard = ({ media, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="260" image={media} alt="img" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "rgb(39, 30, 89)", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgb(39, 30, 89)" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" sx={{ fontWeight: "bold" }}>
          Voir plus
        </Button>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
