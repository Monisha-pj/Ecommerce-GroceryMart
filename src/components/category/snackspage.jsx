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


import chips from "../../assets/images/snacks_category/chips.png";
import cookies from "../../assets/images/snacks_category/cookies.png";
import chocolate from "../../assets/images/snacks_category/chocolate.png";
import popcorn from "../../assets/images/snacks_category/popcorn.png";
import nuts from "../../assets/images/snacks_category/nuts.png";
import biscuits from "../../assets/images/snacks_category/biscuits.png";
import candy from "../../assets/images/snacks_category/candy.png";
import crackers from "../../assets/images/snacks_category/crackers.png";
import pretzels from "../../assets/images/snacks_category/pretzels.png";
import granolaBar from "../../assets/images/snacks_category/granola_bar.png";
import marshmallow from "../../assets/images/snacks_category/marshmallow.png";
import wafers from "../../assets/images/snacks_category/wafers.png";


const snacks = [
  { id: 301, name: "Chips", price: "₹50", image: chips },
  { id: 302, name: "Cookies", price: "₹80", image: cookies },
  { id: 303, name: "Chocolate", price: "₹100", image: chocolate },
  { id: 304, name: "Popcorn", price: "₹60", image: popcorn },
  { id: 305, name: "Nuts", price: "₹150", image: nuts },
  { id: 306, name: "Biscuits", price: "₹40", image: biscuits },
  { id: 307, name: "Candy", price: "₹30", image: candy },
  { id: 308, name: "Crackers", price: "₹70", image: crackers },
  { id: 309, name: "Pretzels", price: "₹90", image: pretzels },
  { id: 310, name: "Granola Bar", price: "₹120", image: granolaBar },
  { id: 311, name: "Marshmallow", price: "₹55", image: marshmallow },
  { id: 312, name: "Wafers", price: "₹45", image: wafers }
];

const SnacksPage = () => {
  const { wishlist, cart, toggleWishlist, addToCart, removeFromCart } = useStore();

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);
  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleCartToggle = (snack) => {
    if (isInCart(snack.id)) {
      removeFromCart(snack.id);
    } else {
      addToCart(snack);
    }
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Snacks
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {snacks.map((snack) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={snack.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
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
                  image={snack.image}
                  alt={snack.name}
                  sx={{
                    height: 200,
                    width: 250,
                    objectFit: "contain",
                    backgroundColor: "#fff"
                  }}
                />
                <IconButton
                  onClick={() => toggleWishlist(snack)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" }
                  }}
                >
                  {isWishlisted(snack.id) ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon color="error" />
                  )}
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">{snack.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {snack.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color={isInCart(snack.id) ? "error" : "success"}
                  onClick={() => handleCartToggle(snack)} 
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
                  {isInCart(snack.id) ? "Remove from Cart" : "Add to Cart"} {/* Toggle button text */}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SnacksPage;
