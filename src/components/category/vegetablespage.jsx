
import React from "react";
import { useStore } from "../../context/StoreContext"; 
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Box
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


import tomato from "../../assets/images/vegetables_category/tomato.png";
import potato from "../../assets/images/vegetables_category/potato.png";
import onion from "../../assets/images/vegetables_category/onion.png";
import carrot from "../../assets/images/vegetables_category/carrot.png";
import capsicum from "../../assets/images/vegetables_category/capsicum.png";
import cucumber from "../../assets/images/vegetables_category/cucumber.png";
import cabbage from "../../assets/images/vegetables_category/cabbage.png";
import spinach from "../../assets/images/vegetables_category/spinach.png";
import cauliflower from "../../assets/images/vegetables_category/cauliflower.png";
import beetroot from "../../assets/images/vegetables_category/beetroot.png";
import pumpkin from "../../assets/images/vegetables_category/pumpkin.png";
import brinjal from "../../assets/images/vegetables_category/brinjal.png";


const vegetables = [
  { id: 101, name: "Tomato", price: "₹30", image: tomato },
  { id: 102, name: "Potato", price: "₹25", image: potato },
  { id: 103, name: "Onion", price: "₹40", image: onion },
  { id: 104, name: "Carrot", price: "₹50", image: carrot },
  { id: 105, name: "Capsicum", price: "₹60", image: capsicum },
  { id: 106, name: "Cucumber", price: "₹35", image: cucumber },
  { id: 107, name: "Cabbage", price: "₹45", image: cabbage },
  { id: 108, name: "Spinach", price: "₹20", image: spinach },
  { id: 109, name: "Cauliflower", price: "₹55", image: cauliflower },
  { id: 110, name: "Beetroot", price: "₹30", image: beetroot },
  { id: 111, name: "Pumpkin", price: "₹40", image: pumpkin },
  { id: 112, name: "Brinjal", price: "₹35", image: brinjal }
];

const VegetablesPage = () => {
  const { wishlist, cart, toggleWishlist, addToCart, removeFromCart } = useStore(); 

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);
  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleCartToggle = (vegetable) => {
    if (isInCart(vegetable.id)) {
      removeFromCart(vegetable.id);
    } else {
      addToCart(vegetable);
    }
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Vegetables
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {vegetables.map((vegetable) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={vegetable.id}>
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
                  image={vegetable.image}
                  alt={vegetable.name}
                  sx={{
                    height: 200,
                    width: 250,
                    objectFit: "contain",
                    backgroundColor: "#fff"
                  }}
                />
                <IconButton
                  onClick={() => toggleWishlist(vegetable)}
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
                  {isWishlisted(vegetable.id) ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon color="error" />
                  )}
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">{vegetable.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {vegetable.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color={isInCart(vegetable.id) ? "error" : "success"}
                  onClick={() => handleCartToggle(vegetable)} // Toggle add/remove to cart
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
                  {isInCart(vegetable.id) ? "Remove from Cart" : "Add to Cart"} {/* Toggle button text */}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VegetablesPage;
