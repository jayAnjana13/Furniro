import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import CheckOut from "./pages/CheckOut/CheckOut";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const url = "http://localhost:5000";

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop url={url} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
