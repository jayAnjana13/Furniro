import ProductListDisplay from "../ProductListDisplay/ProductListDisplay";

const ProductList = ({ list, removeProduct, fetchList }) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
