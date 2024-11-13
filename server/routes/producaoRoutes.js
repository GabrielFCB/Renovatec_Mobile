const express = require("express");

const {
  updateProducaoExameInicial,
} = require("../controller/producaoController");

const router = express.Router();

router.put("/producao-exame-inicial/:id", updateProducaoExameInicial);

module.exports = router;
