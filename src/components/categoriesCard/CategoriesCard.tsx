import React from "react";
import { Product } from "@/pages/categories";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const CategoriesCard: React.FC<Product> = ({ img, name }) => { 
  return (
    <Card
      sx={{
        maxWidth: "300px",
        minWidth: "300px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={name}
          style={{
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoriesCard;