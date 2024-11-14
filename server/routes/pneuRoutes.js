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
  getPneuEscareacao,
  getPneuCorteBanda,
  getPneuAutoclave,
  getPneuAplicacaoCola,
  getPneuAplicarBanda,
  updatePneuExameInicial,
  updatePneuRaspa,
  updatePneuEscareacao,
  updatePneuAplicacaoCola,
  updatePneuOrbicushion,
  updatePneuCorteBanda,
  updatePneuAplicarBanda,
  updatePneuMontagem,
  updatePneuAutoclave,
  updatePneuExameFinal,
  getPneuById,
} = require("../controller/pneuController");

const router = express.Router();

router.post("/pneus", insertPneu);
router.get("/pneus-by-id/:id", getPneuById);
router.get("/pneus-by-coleta/:id", getPneuByColeta);
router.get("/pneus-raspa/", getPneuRaspa);
router.get("/pneus-orbicushion/", getPneuOrbicushion);
router.get("/pneus-montagem/", getPneuMontagem);
router.get("/pneus-exame-inicial/", getPneuExameInicial);
router.get("/pneus-exame-final/", getPneuExameFinal);
router.get("/pneus-escareacao/", getPneuEscareacao);
router.get("/pneus-corte-banda/", getPneuCorteBanda);
router.get("/pneus-autoclave/", getPneuAutoclave);
router.get("/pneus-aplicacao-cola/", getPneuAplicacaoCola);
router.get("/pneus-aplicar-banda/", getPneuAplicarBanda);
router.get("/pneus-producao-finalizada/", getPneuByProducaoFinalizada);
router.put("/pneus/:id", updatePneu);
router.put("/pneus/etapa-exame-inicial/:id", updatePneuExameInicial);
router.put("/pneus/etapa-raspa/:id", updatePneuRaspa);
router.put("/pneus/etapa-escareacao/:id", updatePneuEscareacao);
router.put("/pneus/etapa-aplicacao-cola/:id", updatePneuAplicacaoCola);
router.put("/pneus/etapa-orbicushion/:id", updatePneuOrbicushion);
router.put("/pneus/etapa-corte-banda/:id", updatePneuCorteBanda);
router.put("/pneus/etapa-aplicar-banda/:id", updatePneuAplicarBanda);
router.put("/pneus/etapa-montagem/:id", updatePneuMontagem);
router.put("/pneus/etapa-autoclave/:id", updatePneuAutoclave);
router.put("/pneus/etapa-exame-final/:id", updatePneuExameFinal);

module.exports = router;
