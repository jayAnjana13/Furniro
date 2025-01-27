import axios from "axios";
import ProductListDisplay from "../ProductListDisplay/ProductListDisplay";
import { useState } from "react";

const ProductList = ({ url, list, setList, removeProduct, fetchList }) => {
  const [products, setProducts] = useState(list);

  const updateProduct = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `${url}/api/product/update/${updatedProduct.id}`,
        updatedProduct
      );
      const updatedData = response.data;
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === updatedData._id ? updatedData : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="product">
      <div className="product-list">
        {list.map((item, index) => (
          <ProductListDisplay
            key={item._id || index}
            id={item._id || index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            badge={item.badge}
            removeProduct={removeProduct}
            updateProduct={updateProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
