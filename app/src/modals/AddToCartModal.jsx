import { Modal, Button } from "react-bootstrap";

const AddToCartModal = ({ showModal, handleClose, handleAddToCart }) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to add this product to the cart?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddToCartModal;
