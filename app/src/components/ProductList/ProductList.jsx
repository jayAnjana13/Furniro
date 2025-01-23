import { shop_products } from "../../assets/assets";
import ProductListDisplay from "../ProductListDisplay/ProductListDisplay";
const ProductList = () => {
  return (
    <div className="product">
      <div className="product-list">
        {shop_products.map((item, index) => {
          return (
            <ProductListDisplay
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              badge={item.badge}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
