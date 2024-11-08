const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/login", authController.login);
router.post("/signOut", authController.signOut);
router.post("/passwordReset", authController.passwordReset);
router.post("/getSession", authController.getSession);

module.exports = router;
