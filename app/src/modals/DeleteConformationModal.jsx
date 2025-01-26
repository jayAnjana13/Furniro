import { Modal, Button } from "react-bootstrap";

const DeleteConfirmationModal = ({
  showDeleteModal,
  handleDeleteConfirm,
  handleDeleteCancel,
}) => {
  return (
    <Modal show={showDeleteModal} onHide={handleDeleteCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to add this product to the cart?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDeleteCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDeleteConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
