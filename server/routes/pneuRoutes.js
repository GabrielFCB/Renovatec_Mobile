// routes/pneuRoutes.js
const express = require("express");
const {
  insertPneu,
  getPneuByColeta,
  updatePneu,
  getPneuByProducaoFinalizada,
} = require("../controller/pneuController");

const router = express.Router();

router.post("/pneus", insertPneu);
router.get("/pneus-by-coleta/:id", getPneuByColeta);
router.get("/pneus-producao-finalizada/", getPneuByProducaoFinalizada);
router.put("/pneus/:id", updatePneu);

module.exports = router;
