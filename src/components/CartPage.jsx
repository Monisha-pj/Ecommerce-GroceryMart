
import React from "react";
import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Box, TextField } from "@mui/material";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, clearCart } = useStore();
  const navigate = useNavigate();

  
  const grandTotal = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);


  const handleCheckout = () => {
    alert("Order Placed Successfully!");
    clearCart(); 
    navigate("/"); 
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        My Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" align="center" color="text.secondary">
          Your cart is empty!
        </Typography>
      ) : (
        <>
          <Grid container spacing={5} justifyContent="center">
            {cart.map((item) => {
              const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
              const totalPrice = numericPrice * item.quantity;

              return (
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
                        boxShadow: 6,
                      },
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
                          backgroundColor: "#fff",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Price: ₹{totalPrice.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Quantity:
                      </Typography>
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value, 10);
                          if (!isNaN(newQuantity) && newQuantity >= 1) {
                            increaseQuantity(item, newQuantity);
                          }
                        }}
                        inputProps={{
                          min: 1,
                          style: {
                            textAlign: "center",
                            width: "60px",
                            height: "30px",
                          },
                        }}
                        variant="outlined"
                        size="small"
                      />
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                      <Button variant="outlined" color="error" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Typography variant="h5">Grand Total: ₹{grandTotal.toFixed(2)}</Typography>
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleCheckout}
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
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CartPage;

