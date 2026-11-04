import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProductList from "./pages/Admin/ProductList";
import ProductCreate from "./pages/Admin/ProductCreate";
import ProductEdit from "./pages/Admin/ProductEdit";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; 
import ProtectedRoute from "./components/ProtectedRoute";
import Shop from "./pages/Users/Shop";
import Cart from "./pages/Users/Cart";
import Checkout from "./pages/Users/Checkout";
import OrderList from "./pages/Admin/OrderList";
import HeroBanner from "./components/Herobanner";
import Home from "./pages/Users/Home";
import ServicesPage from "./pages/Users/ServicesPage";
import ContactPage from "./pages/Users/ContactPage";
import AboutPage from "./pages/Users/AboutPage";
import Login from "./pages/Users/Login"; 
import { Register } from "./pages/Users/Register";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* end users */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* Admin */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="products" element={<ProductList />} />
                <Route path="products/create" element={<ProductCreate />} />
                <Route path="products/edit/:id" element={<ProductEdit />} />
                <Route path="orders" element={<OrderList />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;