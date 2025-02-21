const StoreProduct = require("../models/storeProduct.model");

const getStoreProducts = async (req, res) => {
  try {
    const storeProducts = await StoreProduct.find({ storeId: req.params.storeId }).populate("productId");
    res.json(storeProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getStoreProducts };
