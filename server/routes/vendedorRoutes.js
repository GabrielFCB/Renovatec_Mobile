const express = require("express");
const {
  getVendedorByID,
  getVendedor,
} = require("../controller/vendedorController");

const router = express.Router();

router.get("/vendedores/:userId", getVendedorByID);
router.get("/vendedores", getVendedor);

module.exports = router;
