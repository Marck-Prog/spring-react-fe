import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import Navbar from "./customer/components/Navbar/Navbar";
import Account from "./customer/pages/Account/Account";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import { fetchSellerProfile } from "./State/seller/sellerSlice";
import store, { useAppDispatch, useAppSelector } from "./State/Store";
import customTheme from "./Theme/customTheme";
import Auth from "./customer/pages/Auth/Auth";
import { fetchUserProfile } from "./State/AuthSlice";
import PaymentSuccess from "./customer/pages/PaymentSuccess";
import Wishlist from "./customer/Wishlist/Wishlist";
import { createHomeCategories } from "./State/customer/customerSlice";
import { homeCategories } from "./data/HomeCategories";

const App = () => {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
    dispatch(createHomeCategories(homeCategories));
  }, []);

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller");
    }
  }, [seller.profile]);

  useEffect(() => {
    dispatch(
      fetchUserProfile({ jwt: auth.jwt || localStorage.getItem("jwt") })
    );
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment-success/:orderId"
            element={<PaymentSuccess />}
          />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
