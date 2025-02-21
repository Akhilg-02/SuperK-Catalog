const express = require("express");
const { getStoreProducts } = require("../controllers/storeProduct.controller");

const router = express.Router();



router.get("/:storeId", getStoreProducts);

module.exports = router;