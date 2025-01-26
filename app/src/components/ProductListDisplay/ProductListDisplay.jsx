import "./ProductListDisplay.css";
// import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import AddToCartModal from "../../modals/AddToCartModal";
import DeleteConfirmationModal from "../../modals/DeleteConformationModal";

const ProductListDisplay = ({
  url,
  id,
  name,
  price,
  description,
  image,
  badge,
  removeProduct,
}) => {
  // const navigate = useNavigate();
  const { addToCart } = useContext(StoreContext);

  const [isAdded, setIsAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);

  const handleShow = () => setShowModal(true); // Show the modal
  const handleClose = () => setShowModal(false); // Close the modal

  const handleAddToCart = () => {
    setIsAdded(true);
    setShowModal(false);
    addToCart(id);
  };

  // Function for confirming deletion
  const handleDeleteConfirm = () => {
    removeProduct(id); // Call removeProduct to delete the item
    setShowDeleteModal(false); // Close the delete confirmation modal
    // alert("Product Deleted");
  };

  // Function for canceling deletion
  const handleDeleteCancel = () => {
    setShowDeleteModal(false); // Close the modal without deleting
  };

  // const MoveToSingleProduct = () => {
  //   navigate("/single-product", { state: { id } });
  // };

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
                <span>Update</span>
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
    </div>
  );
};

export default ProductListDisplay;
