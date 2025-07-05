
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "../context/StoreContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WishlistPage from "../components/WishlistPage";
import CartPage from "../components/CartPage";
import AppHome from "../components/AppHome";
import SignIn from "../components/signIn";
import SignUp from "../components/signup";
import ForgotPassword from "../components/forgotpassword";
import FruitsPage from "../components/category/fruitspage";
import VegetablesPage from "../components/category/vegetablespage";
import DiaryPage from "../components/category/DiaryPage";
import SnacksPage from "../components/category/snackspage";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          {/* Navbar at the top */}
          <Navbar />

          {/* Main Route Pages */}
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/Fruits" element={<FruitsPage />} />
            <Route path="/category/Vegetables" element={<VegetablesPage />} />
            <Route path="/category/Dairy" element={<DiaryPage />} />
            <Route path="/category/Snacks" element={<SnacksPage />} />
          </Routes>

          {/* Footer at the bottom */}
          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
