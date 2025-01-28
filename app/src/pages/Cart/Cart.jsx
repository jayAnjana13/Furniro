import { assets, shop_products } from "../../assets/assets";
import GloryPage from "../../components/GloryPage/GloryPage";
import { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount, product_list } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="shop-banner">
        <img src={assets.shop_banner} alt="" />
      </div>
      <div className="shop-banner-overlay">
        <img src={assets.logo} alt="" />
        <h2>Cart</h2>
        <p>Home - Cart</p>
      </div>

      <div className="cart-list">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {Object.entries(cartItems).map(([itemId, quantity]) => {
            const item = product_list.find((product) => product._id === itemId);

            if (!item) {
              
              return null;
            }
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rp {item.price} </p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rp {item.price * cartItems[item._id]} </p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rp {getTotalCartAmount()}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rp {getTotalCartAmount()}</b>
            </div>

            <button onClick={() => navigate("/checkout")}>Check Out</button>
          </div>
        </div>
      </div>
      <GloryPage />
    </div>
  );
};

export default Cart;
