

import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import { Home as HomeIcon, ShoppingCart as ShoppingCartIcon, FavoriteBorder as WishlistIcon, AccountCircle as AccountIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { useStore } from "../context/StoreContext";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { wishlist, cart } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("savedEmail");

    console.log("Logged out successfully");


    navigate("/signin");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#28a745" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GroceryMart
        </Typography>

        <Tooltip title="Home">
          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Sign In / Sign Up">
          <IconButton color="inherit" component={Link} to="/signin">
            <AccountIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Wishlist">
          <IconButton color="inherit" component={Link} to="/wishlist" sx={{ position: "relative" }}>
            <WishlistIcon />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "0 5px",
                  fontSize: "12px"
                }}
              >
                {wishlist.length}
              </span>
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title="Cart">
          <IconButton color="inherit" component={Link} to="/cart" sx={{ position: "relative" }}>
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "0 5px",
                  fontSize: "12px"
                }}
              >
                {cart.length}
              </span>
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title="Logout">
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
