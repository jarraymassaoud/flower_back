const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    products: [
      {
        productID: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    addres: { type: Object },
    statu: { type: String, default: "pending" },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Cart", cartSchema);
