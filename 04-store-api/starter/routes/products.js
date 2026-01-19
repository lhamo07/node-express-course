const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");
const { get } = require("mongoose");
router.route("/static").get(getAllProductsStatic);
router.route("/").get(getAllProducts);
module.exports = router;
