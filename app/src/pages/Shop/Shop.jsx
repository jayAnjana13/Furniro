import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import GloryPage from "../../components/GloryPage/GloryPage";
import ProductList from "../../components/ProductList/ProductList";
import "./shop.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import ProductModal from "../../modals/ProductModal";
import { toast } from "react-toastify";

const Shop = ({ url }) => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [list, setList] = useState([]);

  // fetch product list
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  };

  // remove product
  const removeProduct = async (productId) => {
    const response = await axios.post(`${url}/api/product/remove`, {
      id: productId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Eror");
    }
  };

  // add product
  const handleAddProduct = (newProduct) => {
    setList((prevProducts) => [newProduct, ...prevProducts]);
  };

  //
  useEffect(() => {
    fetchList();
  }, [list]);

  return (
    <React.Fragment>
      <div className="shop-banner">
        <img src={assets.shop_banner} alt="" />
      </div>
      <div className="shop-banner-overlay">
        <img src={assets.logo} alt="" />
        <h2>Shop</h2>
        <p>Home - Shop</p>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Button
            style={{ backgroundColor: "#b88e2f", border: "none" }}
            onClick={() => setShowProductModal(true)}
          >
            Add Product
          </Button>
          <small style={{ fontSize: "10px" }}>(You can Add Product here)</small>
        </div>

        <div className="shop-search">
          <p>Show</p>
          <input type="text" />
          <p>Sort by</p>
          <input type="text" />
        </div>
      </div>
      <div className="shop-products">
        <ProductList
          url={url}
          list={list}
          removeProduct={removeProduct}
          fetchList={fetchList}
        />
      </div>

      <GloryPage />

      <ProductModal
        url={url}
        show={showProductModal}
        onHide={() => setShowProductModal(false)}
        onProductAdded={handleAddProduct}
      />
    </React.Fragment>
  );
};

export default Shop;
