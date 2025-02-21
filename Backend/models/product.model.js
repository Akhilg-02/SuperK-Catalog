const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
{
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  availableForDelivery: { type: Boolean, required: true },
},
{
  versionKey: false,
  timestamps: true,
}
);

module.exports = mongoose.model("Product", ProductSchema);



