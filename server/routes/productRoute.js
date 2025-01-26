import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  updateProduct,
} from "../controllers/productController.js";
import multer from "multer";

const productRoute = express.Router();

//image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productRoute.post("/add", upload.single("image"), addProduct);
productRoute.get("/list", listProduct);
productRoute.post("/remove", removeProduct);
productRoute.put("/update/:id", updateProduct);

export default productRoute;
