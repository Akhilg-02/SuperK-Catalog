const Product = require("../models/product.model");

// Get single product by store
const getProductsByStore = async (req, res) => {
  try {
    const storeId = req.params.storeId; 
    const products = await Product.find({ storeId: storeId });
    //console.log("Fetched Products:", products);
    res.json(products);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProductsByStore };
