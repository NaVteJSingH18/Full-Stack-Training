const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers/productcontroller");

router.get("/", getAllProducts);

module.exports = router;
