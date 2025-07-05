


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link,
  Box,
  Tooltip,
} from "@mui/material";

import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalOffer as DealsIcon,
  FavoriteBorder as WishlistIcon,
  Category as ProductsIcon,
  ContactSupport as ContactIcon,
  Person as SignInIcon,
} from "@mui/icons-material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/App.css";


import vegeImage from "../assets/images/vege.webp";
import fruitsImage from "../assets/images/fruits.avif";
import groceryImage from "../assets/images/gorcery.jpeg";

import fruitCategory from "../assets/images/fruit-category.webp";
import vegetablesCategory from "../assets/images/vegetables-category.jfif";
import dairyCategory from "../assets/images/diary category.jfif";
import snacksCategory from "../assets/images/snacks-category.jfif";

function AppHome() {
  const categories = [
    { id: 1, name: "Fruits", image: fruitCategory },
    { id: 2, name: "Vegetables", image: vegetablesCategory },
    { id: 3, name: "Dairy", image: dairyCategory },
    { id: 4, name: "Snacks", image: snacksCategory },
  ];

  return (
    <div className="App">
     

      <Container sx={{ mt: 4 }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          <SwiperSlide><img src={vegeImage} alt="Vegetables" /></SwiperSlide>
          <SwiperSlide><img src={fruitsImage} alt="Fruits" /></SwiperSlide>
          <SwiperSlide><img src={groceryImage} alt="Grocery" /></SwiperSlide>
        </Swiper>
      </Container>

      
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id} style={{ display: "flex" }}>
              <Link href={`/category/${category.name}`} className="category-link">
                <Card className="category-card">
                  <CardMedia
                    component="img"
                    image={category.image}
                    alt={category.name}
                    sx={{ height: 200, width: 250, objectFit: "cover" }}
                  />
                  <CardContent className="category-title">{category.name}</CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      
    </div>
  );
}

export default AppHome;
