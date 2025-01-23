import { assets, shop_products } from "../../assets/assets";
import GloryPage from "../../components/GloryPage/GloryPage";
import "./CheckOut.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

const CheckOut = () => {
  const { getTotalCartAmount, cartItems } = useContext(StoreContext);

  return (
    <div>
      <div className="shop-banner">
        <img src={assets.shop_banner} alt="" />
      </div>
      <div className="shop-banner-overlay">
        <img src={assets.logo} alt="" />
        <h2>Check Out</h2>
        <p>Home > Check Out</p>
      </div>

      {/* check out body */}
      <div className="check-out">
        <form className="place-order">
          <div className="place-order-left">
            <p className="title">Billing</p>
            <div className="multi-fields">
              <div>
                <label htmlFor="First Name">First Name</label>
                <input type="text" required />
              </div>
              <div>
                <label htmlFor="First Name">Last Name</label>
                <input type="text" required />
              </div>
            </div>
            <label htmlFor="">Company Name(optional)</label>
            <input type="text" required />

            <label htmlFor="">Country/ Region</label>
            <select>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Sri lanka">Sri lanka</option>
              <option value="Australia">Australia</option>
              <option value="Dubai">Dubai</option>
            </select>
            <label htmlFor="First Name">Street Address</label>
            <input type="text" required />

            <label htmlFor="First Name">Town City</label>
            <input type="text" required />

            <label htmlFor="First Name">Province</label>
            <select>
              <option value="West Province">WestProvince</option>
              <option value="East Province">East Province</option>
              <option value="North Province ">North Province</option>
              <option value="South Province">South Province</option>
              <option value="Cental Province">CentalProvince</option>
            </select>

            <label htmlFor="First Name">Zip code</label>
            <input type="text" required />

            <label htmlFor="First Name">Phone</label>
            <input type="number" required />
            <label htmlFor="First Name">Email Address</label>
            <input type="email" required />
            <input type="text" required placeholder="Additional Information" />
          </div>

          {/* right side */}
          <div className="place-order-right">
            <div
              style={{
                padding: "20px 4vw",
                background: "none",
                border: "3px solid #f9f1e7",
              }}
              className="cart-total"
            >
              <div>
                <div className="cart-total-details">
                  <h2>Product</h2>
                  <h2>Subtotal</h2>
                </div>

                {Object.entries(cartItems).map(([itemId, quantity]) => {
                  const item = shop_products.find(
                    (product) => product._id === itemId
                  );
                  return (
                    <div key={item._id} className="cart-total-details">
                      <p>
                        {item.name} x {cartItems[item._id]}
                      </p>
                      <p>Rp{item.price * cartItems[item._id]} </p>
                    </div>
                  );
                })}

                <div className="cart-total-details">
                  <h4>Subtotal</h4>
                  <p>Rp {getTotalCartAmount()}</p>
                </div>

                <div className="cart-total-details">
                  <h3>Total</h3>
                  <b style={{ color: "#B88E2F", fontSize: "24px" }}>
                    Rp {getTotalCartAmount()}
                  </b>
                </div>

                <hr />

                <div>
                  <ul>
                    <li>Direct Bank Transfer</li>
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                    <li>Direct Bank Transfer</li>
                    <li>Cash on delivery</li>
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our{" "}
                      <strong>privacy policy </strong>.
                    </p>
                  </ul>
                </div>
              </div>
              <button type="submit">PROCEED TO PAYMENT</button>
            </div>
          </div>
        </form>
      </div>

      <GloryPage />
    </div>
  );
};

export default CheckOut;
