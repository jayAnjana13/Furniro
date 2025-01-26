import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";

const ProductUpdateModal = ({ url, show, onHide, onUpdate, product, item }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
  });

  // Pre-fill form when the modal opens
  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name,
        category: item.category,
        description: item.description,
        price: item.price,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onUpdate({ ...product, ...formData }); // Send updated product to parent
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Field
                  as="select"
                  className="form-control"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="Chair">Chair</option>
                  <option value="Table">Table</option>
                  <option value="Sofa">Sofa</option>
                  <option value="Bed">Bed</option>
                </Field>
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProductUpdateModal;
