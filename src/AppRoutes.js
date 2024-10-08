import { Route, Routes } from "react-router-dom";
import CheckoutPage from "../../frontend/src/Pages/Checkout/CheckoutPage";
import CartPage from "./Pages/Cart/CartPage";
import FoodPage from "./Pages/Food/FoodPage";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import AuthRoute from "./component/AuthRoute/Authroute";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/tag/:tag" element={<HomePage />} />
        <Route path="/food/:id" element={<FoodPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route 
          path="/checkout" 
          element={
            <AuthRoute>
              <CheckoutPage/>
            </AuthRoute>
          } 
        />
    </Routes>
  );
}
