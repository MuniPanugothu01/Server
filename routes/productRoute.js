// const express = require("express");
// const { upload } = require("../configs/multer.js");
// const { authSeller } = require("../middlewares/authSeller.js");
// const {
//   addProduct,
//   ProductList,
//   productById,
//   changeStock,
// } = require("../controllers/productController.js");
// const productRouter = express.Router();

// // productRouter.post("/add", upload.array(["images"]), authSeller, addProduct);
// productRouter.post("/add", upload.array("images"), authSeller, addProduct);

// productRouter.get("/list", ProductList);
// productRouter.get("/id", productById);
// productRouter.post("/stock", authSeller, changeStock);

// module.exports = {
//   productRouter,
// };

const express = require("express");
const productRouter = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  addProduct,
  ProductList,
  productById,
  changeStock,
} = require("../controllers/productController");

productRouter.post("/add", upload.array("images", 4), addProduct);
productRouter.get("/list", ProductList);
productRouter.post("/id", productById);
productRouter.post("/stock", changeStock);

module.exports = productRouter;
