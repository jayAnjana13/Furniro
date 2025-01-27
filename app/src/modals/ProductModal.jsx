import { Button, Col, Modal, Row, Form } from "react-bootstrap";
import { assets, shop_products } from "../assets/assets.js";
import { Formik, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import * as Yup from "yup";

const ProductModal = ({ url, show, onHide, onProductAdded }) => {
  //
  const validationSchema = Yup.object({
    name: Yup.string().required("Brand name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive")
      .typeError("Price must be a number"),
    description: Yup.string()
      .required("Description is required")
      .max(300, "Description cannot exceed 300 characters"),
  });

  const onSubmitHandler = async (values, { resetForm }) => {
    // Prepare product data
    const productData = {
      ...values,
      image: assets.respira, // Assign static image
    };

    try {
      const response = await axios.post(`${url}/api/product/add`, productData);
      if (response.data.success) {
        toast.success(response.data.message);
        onProductAdded(response.data.product || response.data);
        resetForm(); // Clear form after submission
        onHide(); // Close modal
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={{
          name: "",
          category: "",
          price: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
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
                    src={assets.respira}
                    style={{
                      width: "250px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                    alt="Product"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label> Name:</Form.Label>
                  <Field
                    as="select"
                    className="form-control"
                    name="name"
                    placeholder="Enter brand name"
                  >
                    <option value="">Select brand</option>
                    <option value="Syltherine">Syltherine</option>
                    <option value="Leviosa">Leviosa</option>
                    <option value="Lolito">Lolito</option>
                    <option value="Muggo">Muggo</option>
                  </Field>
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{ color: "red", marginTop: "5px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category:</Form.Label>
                  <Field
                    as="select"
                    className="form-control"
                    name="category"
                    placeholder="Enter product category"
                  >
                    <option value="">Select category</option>
                    <option value="Table">Table</option>
                    <option value="Chair">Chair</option>
                    <option value="Sofa">Sofa</option>
                    <option value="Bed">Bed</option>
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    style={{ color: "red", marginTop: "5px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price:</Form.Label>
                  <Field
                    className="form-control"
                    name="price"
                    placeholder="Enter product price"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    style={{ color: "red", marginTop: "5px" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Badge:</Form.Label>
                  <Field
                    className="form-control"
                    name="badge"
                    placeholder="Add badge (if any)"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description:</Form.Label>
                  <Field
                    as="textarea"
                    className="form-control"
                    name="description"
                    placeholder="Enter product description"
                    rows={3}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    style={{ color: "red", marginTop: "5px" }}
                  />
                </Form.Group>
              </Row>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ProductModal;
