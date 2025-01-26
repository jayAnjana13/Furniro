import "./navbar.css";
import { assets } from "../../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="" />
        <h1>Furniro</h1>
      </div>

      <ul className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <a href="/single-product">About</a>
        <a href="#">Contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.user_icon} alt="" />

        <img src={assets.search_icon} alt="" />

        <img src={assets.fav_icon} alt="" />
        <div className="nav-cart-icon">
          <img onClick={handleCart} src={assets.cart_icon} alt="" />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
