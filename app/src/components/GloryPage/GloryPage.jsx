import { assets } from "../../assets/assets";
import "./GloryPage.css";

const GloryPage = () => {
  return (
    <div className="glory">
      <div className="glory-content">
        <div className="glory-items">
          <div className="glory-items-img">
            <img src={assets.trophy_icon} alt="" />
          </div>
          <div className="glory-items-text">
            <h4>High Quality</h4>
            <p>4rafted from top materials</p>
          </div>
        </div>

        <div className="glory-items">
          <div className="glory-items-img">
            <img src={assets.guarantee_icon} alt="" />
          </div>
          <div className="glory-items-text">
            <h4>Warrenty Protection</h4>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="glory-items">
          <div className="glory-items-img">
            <img src={assets.shipping_icon} alt="" />
          </div>
          <div className="glory-items-text">
            <h4>Free Shipping</h4>
            <p>Order over $150</p>
          </div>
        </div>

        <div className="glory-items">
          <div className="glory-items-img">
            <img src={assets.support_icon} alt="" />
          </div>
          <div className="glory-items-text">
            <h4>24/7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GloryPage;
