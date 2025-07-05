

import React from "react";
import { useStore } from "../../context/StoreContext"; // Use context
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, IconButton, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


import apple from "../../assets/images/fruits_category/apple.png";
import banana from "../../assets/images/fruits_category/banana.png";
import orange from "../../assets/images/fruits_category/orange.png";
import grapes from "../../assets/images/fruits_category/grapes.png";
import pineapple from "../../assets/images/fruits_category/pineapple.png";
import mango from "../../assets/images/fruits_category/mango.png";
import papaya from "../../assets/images/fruits_category/papaya.png";
import strawberry from "../../assets/images/fruits_category/strawberry.png";
import watermelon from "../../assets/images/fruits_category/watermelon.png";
import kiwi from "../../assets/images/fruits_category/kiwi.png";
import guava from "../../assets/images/fruits_category/guava.png";
import pomegranate from "../../assets/images/fruits_category/pomegranate.png";


const fruits = [
  { id: 1, name: "Apple", price: "₹99", image: apple },
  { id: 2, name: "Banana", price: "₹40", image: banana },
  { id: 3, name: "Orange", price: "₹75", image: orange },
  { id: 4, name: "Grapes", price: "₹120", image: grapes },
  { id: 5, name: "Pineapple", price: "₹150", image: pineapple },
  { id: 6, name: "Mango", price: "₹110", image: mango },
  { id: 7, name: "Papaya", price: "₹80", image: papaya },
  { id: 8, name: "Strawberry", price: "₹200", image: strawberry },
  { id: 9, name: "Watermelon", price: "₹180", image: watermelon },
  { id: 10, name: "Kiwi", price: "₹140", image: kiwi },
  { id: 11, name: "Guava", price: "₹60", image: guava },
  { id: 12, name: "Pomegranate", price: "₹130", image: pomegranate }
];

const FruitsPage = () => {
  const { wishlist, cart, toggleWishlist, addToCart, removeFromCart } = useStore(); 
  const isWishlisted = (id) => wishlist.some((item) => item.id === id);
  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleCartToggle = (fruit) => {
    if (isInCart(fruit.id)) {
      removeFromCart(fruit.id);
    } else {
      addToCart(fruit);
    }
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Fruits
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {fruits.map((fruit) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={fruit.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                border: "2px solid black",
                transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "green",
                  boxShadow: 6
                }
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={fruit.image}
                  alt={fruit.name}
                  sx={{
                    height: 200,
                    width: 250,
                    objectFit: "contain",
                    backgroundColor: "#fff"
                  }}
                />
                <IconButton
                  onClick={() => toggleWishlist(fruit)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.8)"
                    }
                  }}
                >
                  {isWishlisted(fruit.id) ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon color="error" />
                  )}
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">{fruit.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {fruit.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color={isInCart(fruit.id) ? "error" : "success"}
                  onClick={() => handleCartToggle(fruit)}
                  sx={{
                    textTransform: "none",
                    border: "2px solid transparent",
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "black",
                      borderColor: "#1c7c31"
                    }
                  }}
                >
                  {isInCart(fruit.id) ? "Remove from Cart" : "Add to Cart"} 
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FruitsPage;
