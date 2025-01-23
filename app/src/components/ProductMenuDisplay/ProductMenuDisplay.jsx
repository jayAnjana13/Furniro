import "./productMenu.css";

const ProductMenuDisplay = ({ id, name, price, description, image }) => {
  return (
    <div className="product-display">
      <div className="product-item">
        <div className="product-item-img-conatiner">
          <img className="product-item-image" src={image} alt="" />
          <div className="overlay">
            <button className="add-to-cart-button">Add to Cart</button>
            <div className="extra-options">
              <span>Share</span>
              <span>Compare</span>
              <span>Like</span>
            </div>
          </div>
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
