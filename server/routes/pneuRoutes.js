// routes/pneuRoutes.js
const express = require("express");
const {
  insertPneu,
  getPneuByColeta,
  updatePneu,
  getPneuByProducaoFinalizada,
  getPneuRaspa,
  getPneuOrbicushion,
  getPneuMontagem,
  getPneuExameInicial,
  getPneuExameFinal,
} = require("../controller/pneuController");

const router = express.Router();

router.post("/pneus", insertPneu);
router.get("/pneus-by-coleta/:id", getPneuByColeta);
router.get("/pneus-raspa/", getPneuRaspa);
router.get("/pneus-orbicushion/", getPneuOrbicushion);
router.get("/pneus-montagem/", getPneuMontagem);
router.get("/pneus-exame-inicial/", getPneuExameInicial);
router.get("/pneus-exame-final/", getPneuExameFinal);
router.get("/pneus-producao-finalizada/", getPneuByProducaoFinalizada);
router.put("/pneus/:id", updatePneu);

module.exports = router;
