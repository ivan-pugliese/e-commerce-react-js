import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ActionAreaCard({ image, title, alt }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <LocationOnIcon /> {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
