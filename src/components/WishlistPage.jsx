import React from "react";
import { useStore } from "../context/StoreContext";
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Box } from "@mui/material";

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useStore(); 

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        My Wishlist
      </Typography>
      {wishlist.length === 0 ? (
        <Typography variant="h6" align="center" color="text.secondary">
          Your wishlist is empty!
        </Typography>
      ) : (
        <Grid container spacing={5} justifyContent="center">
          {wishlist.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
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
                    borderColor: "red",
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      height: 200,
                      width: 250,
                      objectFit: "contain",
                      backgroundColor: "#fff"
                    }}
                  />
                </Box>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => toggleWishlist(item)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default WishlistPage;
