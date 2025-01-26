import "./productMenu.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const ProductMenuDisplay = ({ id, name, price, description, image, badge }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(StoreContext);

  const [isAdded, setIsAdded] = useState(false);

  const handleCart = (e) => {
    e.stopPropagation();
    // addToCart(id);
    setIsAdded(true);
    navigate("/shop");
  };

  const MoveToSingleProduct = () => {
    navigate("/shop", { state: { id } });
  };

  return (
    <div className="product-display">
      <div onClick={MoveToSingleProduct} className="product-item">
        <div className="product-item-img-conatiner">
          <img className="product-item-image" src={image} alt="" />
          <div className={`overlay ${isAdded ? "disabled-overlay" : ""}`}>
            <button
              onClick={handleCart}
              className="add-to-cart-button"
              disabled={isAdded}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </button>
            {!isAdded && (
              <div className="extra-options">
                <span>Share</span>
                <span>Compare</span>
                <span>Like</span>
              </div>
            )}
          </div>
          {badge && (
            <span className={`badge ${badge === "New" ? "New" : "discount"}`}>
              {badge}
            </span>
          )}
        </div>

        <div className="product-item-info">
          <p className="product-item-name">{name}</p>
          <p className="product-item-description">{description}</p>

          <p className="product-item-price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductMenuDisplay;
