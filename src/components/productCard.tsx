import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import vercel from "../../public/left.jpg";
import Image from "next/image";

// type Props = {}

const useStyles = makeStyles(() => ({
  productItem: {
    display: "flex",
    flexDirection: "column",
    width: "23vw",
    justifyContent: "space-between",
    height: "70vh",
    margin: "1rem 0.5rem",
    padding: ".25rem",
    "&:hover": {
      boxShadow: "5px 5px 8px 3px #d3d3d3",
    },
    [`@media screen and (max-width:768px)`]: {
      width: "90vw",
      height: "60vh",
    },
  },
  imgDiv: {
    height: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".5rem",
  },
  productImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  productDetails: {
    padding: "0.5rem",
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.productItem}>
      <Grid className={classes.imgDiv}>
        <Image src={vercel} alt="image" className={classes.productImg} />
      </Grid>
      <Grid className={classes.productDetails}>
        <Typography variant="h6">NEXT APP</Typography>
        <Typography>Rs.10000</Typography>
        <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
      </Grid>
      <Button color="secondary" variant="contained">
        Add To Cart
      </Button>
    </Grid>
  );
};

export default ProductCard;
