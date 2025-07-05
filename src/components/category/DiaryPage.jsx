import React from "react";
import { useStore } from "../../context/StoreContext"; 
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, IconButton, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


import milk from "../../assets/images/diary_category/milk.png";
import curd from "../../assets/images/diary_category/curd.png";
import cheese from "../../assets/images/diary_category/cheese.png";
import butter from "../../assets/images/diary_category/butter.png";
import ghee from "../../assets/images/diary_category/ghee.png";
import paneer from "../../assets/images/diary_category/panner.png";
import yogurt from "../../assets/images/diary_category/yogurt.png";
import cream from "../../assets/images/diary_category/cream.png";
import buttermilk from "../../assets/images/diary_category/buttermilk.png";
import flavoredMilk from "../../assets/images/diary_category/flavoredMilk.png";
import khoya from "../../assets/images/diary_category/khoya.png";
import milkPowder from "../../assets/images/diary_category/milkPowder.png";


const dairies = [
  { id: 201, name: "Milk", price: "₹50", image: milk },
  { id: 202, name: "Curd", price: "₹40", image: curd },
  { id: 203, name: "Cheese", price: "₹150", image: cheese },
  { id: 204, name: "Butter", price: "₹120", image: butter },
  { id: 205, name: "Ghee", price: "₹500", image: ghee },
  { id: 206, name: "Paneer", price: "₹200", image: paneer },
  { id: 207, name: "Yogurt", price: "₹60", image: yogurt },
  { id: 208, name: "Cream", price: "₹100", image: cream },
  { id: 209, name: "Buttermilk", price: "₹30", image: buttermilk },
  { id: 210, name: "Flavored Milk", price: "₹70", image: flavoredMilk },
  { id: 211, name: "Khoya", price: "₹400", image: khoya },
  { id: 212, name: "Milk Powder", price: "₹350", image: milkPowder }
];

const DiaryPage = () => {
  const { wishlist, cart, toggleWishlist, addToCart, removeFromCart } = useStore(); 

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);
  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleCartToggle = (dairy) => {
    if (isInCart(dairy.id)) {
      removeFromCart(dairy.id); 
    } else {
      addToCart(dairy);
    }
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Dairy Products
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {dairies.map((dairy) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dairy.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
                  image={dairy.image}
                  alt={dairy.name}
                  sx={{
                    height: 200,
                    width: 250,
                    objectFit: "contain",
                    backgroundColor: "#fff"
                  }}
                />
                <IconButton
                  onClick={() => toggleWishlist(dairy)}
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
                  {isWishlisted(dairy.id) ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon color="error" />
                  )}
                </IconButton>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">{dairy.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {dairy.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color={isInCart(dairy.id) ? "error" : "success"}
                  onClick={() => handleCartToggle(dairy)} 
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
                  {isInCart(dairy.id) ? "Remove from Cart" : "Add to Cart"} 
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DiaryPage;
