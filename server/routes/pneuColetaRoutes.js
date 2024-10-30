// routes/coletaRoutes.js
const express = require("express");
const { insertColetaPneu } = require("../controller/pneuColetaController");

const router = express.Router();

router.post("/coletas-pneus", insertColetaPneu);

module.exports = router;
