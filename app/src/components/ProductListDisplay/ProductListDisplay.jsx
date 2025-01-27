import "./ProductListDisplay.css";
// import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import AddToCartModal from "../../modals/AddToCartModal";
import DeleteConfirmationModal from "../../modals/DeleteConformationModal";
import ProductUpdateModal from "../../modals/ProductUpdateModel";

const ProductListDisplay = ({
  url,
  id,
  name,
  price,
  description,
  image,
  badge,
  removeProduct,
  updateProduct,
}) => {
  // const navigate = useNavigate();
  const { addToCart } = useContext(StoreContext);

  const [isAdded, setIsAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showProductUpdateModal, setShowProductUpdateModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setShowModal(false);
    addToCart(id);
  };

  const handleDeleteConfirm = () => {
    removeProduct(id);
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleUpdateCancel = () => {
    setShowProductUpdateModal(false);
  };

  // Product details for editing
  const [selectedProduct, setSelectedProduct] = useState({
    id,
    name,
    price,
    description,
    image,
  });

  const handleUpdateClick = () => {
    setSelectedProduct({ id, name, price, description, image });
    setShowProductUpdateModal(true); // Open modal
  };

  return (
    <div className={`product-display ${isAdded ? "added-to-cart" : ""}`}>
      <div className="product-item">
        <div className="product-item-img-conatiner">
          <img className="product-item-image" src={image} alt="" />
          <div className={`overlay ${isAdded ? "disabled-overlay" : ""}`}>
            <button
              onClick={handleShow}
              className="add-to-cart-button"
              disabled={isAdded}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </button>
            {!isAdded && (
              <div className="extra-options">
                <span onClick={handleUpdateClick}>Update</span>
                <span onClick={() => setShowDeleteModal(true)}>Delete</span>
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
          <p className="product-item-price">Rp {price}</p>
        </div>
      </div>

      {/* Add to Cart Modal */}
      <AddToCartModal
        showModal={showModal}
        handleClose={handleClose}
        handleAddToCart={handleAddToCart}
      />
      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        showDeleteModal={showDeleteModal}
        handleDeleteConfirm={handleDeleteConfirm}
        handleDeleteCancel={handleDeleteCancel}
      />

      {/* update modal */}
      <ProductUpdateModal
        image={image}
        showProductUpdateModal={showProductUpdateModal}
        product={selectedProduct}
        handleUpdateCancel={handleUpdateCancel}
        updateProduct={updateProduct}
        image={image}
      />
    </div>
  );
};

export default ProductListDisplay;
