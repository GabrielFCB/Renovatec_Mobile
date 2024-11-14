const express = require("express");

const {
  updateProducaoExameInicial,
  updateProducaoRaspa,
  updateProducaoEscareacao,
  updateProducaoAplicacaoCola,
  updateProducaoOrbicushion,
  updateProducaoCorteBanda,
  updateProducaoAplicarBanda,
  updateProducaoMontagem,
  updateProducaoAutoclave,
  updateProducaoExameFinal,
} = require("../controller/producaoController");

const router = express.Router();

router.put("/producao-exame-inicial/:id", updateProducaoExameInicial);
router.put("/producao-raspa/:id", updateProducaoRaspa);
router.put("/producao-escareacao/:id", updateProducaoEscareacao);
router.put("/producao-aplicacao-cola/:id", updateProducaoAplicacaoCola);
router.put("/producao-orbicushion/:id", updateProducaoOrbicushion);
router.put("/producao-corte-banda/:id", updateProducaoCorteBanda);
router.put("/producao-aplicar-banda/:id", updateProducaoAplicarBanda);
router.put("/producao-montagem/:id", updateProducaoMontagem);
router.put("/producao-autoclave/:id", updateProducaoAutoclave);
router.put("/producao-exame-final/:id", updateProducaoExameFinal);

module.exports = router;
