import "./products.css";
import { product_menu } from "../../assets/assets.js";
import ProductMenuDisplay from "../ProductMenuDisplay/ProductMenuDisplay";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="product">
      <h1>Our Products</h1>
      <div className="product-list">
        {product_menu.map((item, index) => {
          return (
            <ProductMenuDisplay
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
      <div className="showmore-btn">
        <Link to="/shop">
          <button>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
