import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>Funiro.</h2>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="footer-content-center">
          <div className="footer-content-center-list">
            <p>Company</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop"> Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-content-center-list">
            <p>Company</p>
            <ul>
              <li>Payment Option</li>
              <li>Return</li>
              <li>Privacy policies</li>
            </ul>
          </div>
        </div>
        <div className="footer-content-right">
          <p>Newsletter</p>
          <div className="footer-content-right-item">
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">2023 furino. All rights reverved</p>
    </div>
  );
};

export default Footer;
