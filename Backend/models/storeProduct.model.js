const mongoose = require("mongoose");

const StoreProductSchema = new mongoose.Schema({
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  });
  
  module.exports = mongoose.model("StoreProduct", StoreProductSchema);