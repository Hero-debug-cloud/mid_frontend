import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerlogin from "./pages/Register_login/Register_login";
import Specific from "./pages/Specific/Specific";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Posting from "./pages/Posting/Posting";
import Search from "./pages/Search/Search";
import All from "./pages/All/All";
import Favourite from "./pages/Favourite/Favourite";
import Showing_order from "./pages/Showing_Order/Showing_order";
import Admin_panel from "./pages/Admin_panel/Admin_panel";
import Admin_users from "./components/Admin_Components/Admin_users/Admin_users";
import Admin_products from "./components/Admin_Components/Admin_products/Admin_products";
import Admin_api from "./components/Admin_Components/Admin_api/Admin_api";
import Admin_orders from "./components/Admin_Components/Admin_orders/Admin_orders";
import Admin_revenue from "./components/Admin_Components/Admin_revenue/Admin_revenue"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />}>
          <Route index element={<Home />} />
          <Route path="/:user" element={<Home />} />
          <Route path="/registerlogin" element={<Registerlogin />} />
          <Route path="/product/:product_id/:category" element={<Specific />} />
          <Route path="/search/:product_name" element={<Search />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/:product_id" element={<Order />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/showing_order" element={<Showing_order />} />
        </Route>

        {/* admin panel */}
        <Route path="/admin_panel" element={<Admin_panel />}>
          <Route index element={<Admin_users />} />
          <Route path="/admin_panel/admin_products" element={<Admin_products />} />
          <Route path="/admin_panel/admin_api" element={<Admin_api />} />
          <Route path="/admin_panel/admin_orders" element={<Admin_orders />} />
          <Route path="/admin_panel/admin_revenue" element={<Admin_revenue />} />
        </Route>

        {/* invalid url entered by the enivroment; */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
