import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProductUpdateModal = ({
  showProductUpdateModal,
  product,
  handleUpdateCancel,
  updateProduct,
  image,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  useEffect(() => {
    setUpdatedProduct(product); // Sync state when the product changes
  }, [product]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update action
  const handleUpdate = () => {
    updateProduct(updatedProduct); // Call the update function
    handleUpdateCancel(); // Close the modal
  };

  return (
    <Modal show={showProductUpdateModal} onHide={handleUpdateCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 0",
              }}
            >
              <img
                src={image}
                style={{
                  width: "250px",
                  height: "150px",
                  objectFit: "cover",
                }}
                alt="Product"
              />
            </Col>
          </Row>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              as="select"
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
            >
              <option value="">Select brand</option>
              <option value="Syltherine">Syltherine</option>
              <option value="Leviosa">Leviosa</option>
              <option value="Lolito">Lolito</option>
              <option value="Muggo">Muggo</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formProductCategory" className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={updatedProduct.category || ""}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              <option value="Table">Table</option>
              <option value="Chair">Chair</option>
              <option value="Sofa">Sofa</option>
              <option value="Bed">Bed</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formProductPrice" className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={updatedProduct.price || ""}
              onChange={handleChange}
              placeholder="Enter product price"
            />
          </Form.Group>

          <Form.Group controlId="formProductBadge" className="mb-3">
            <Form.Label>Badge</Form.Label>
            <Form.Control
              type="text"
              name="badge"
              value={updatedProduct.badge || ""}
              onChange={handleChange}
              placeholder="Add badge (if any)"
            />
          </Form.Group>

          <Form.Group controlId="formProductDescription" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={updatedProduct.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleUpdateCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductUpdateModal;
