// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   offerPrice: { type: Number, required: true },
//   image: { type: String, required: true },
//   category: { type: String, required: true },
//   inStock: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now },
// });

// const Product = mongoose.model("product", productSchema);

// module.exports = Product;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  offerPrice: Number,
  image: String, // could be array if you want multiple
  inStock: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
