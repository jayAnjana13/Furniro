import { assets } from "../../assets/assets";
import GloryPage from "../../components/GloryPage/GloryPage";
import ProductList from "../../components/ProductList/ProductList";
import "./shop.css";

const Shop = () => {
  return (
    <div>
      <div className="shop-banner">
        <img src={assets.shop_banner} alt="" />
      </div>
      <div className="shop-banner-overlay">
        <img src={assets.logo} alt="" />
        <h2>Shop</h2>
        <p>Home -> Shop</p>
      </div>

      <div className="shop-filter-and-search">
        <div className="shop-filter">
          <div className="shop-filter-1">
            <img src={assets.filter_icon_1} alt="" />
            <span>Filter</span>
          </div>{" "}
          <div className="shop-filter-2">
            <img src={assets.filter_icon_2} alt="" />
            <img src={assets.filter_icon_3} alt="" />
          </div>
          <div className="shop-pg-num">Showing 1-16 of 32 results</div>
        </div>

        <div className="shop-search">
          <p>Show</p>
          <input type="text" />
          <p>Sort by</p>
          <input type="text" />
        </div>
      </div>
      <div className="shop-products">
        <ProductList />
      </div>

      <GloryPage />
    </div>
  );
};

export default Shop;
