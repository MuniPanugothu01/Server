const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "user" },
    items: [
      // ✅ corrected spelling
      {
        product: { type: String, required: true, ref: "product" },
        quantity: { type: Number, required: true, ref:'seller' },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true, ref: "address" },  
    status: { type: String, default: "Order Placed Here!" },
    paymentType: { type: String, required: true },
    isPaid: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const Order = mongoose.models.order || mongoose.model("order", orderSchema);
module.exports = {
  Order,
};
