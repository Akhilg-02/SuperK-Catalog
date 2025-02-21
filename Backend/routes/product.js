const express = require("express");
const { getProductsByStore } = require("../controllers/product.controller");

const router = express.Router();

router.get("/:storeId", getProductsByStore);

module.exports = router;
