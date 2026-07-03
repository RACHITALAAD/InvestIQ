const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { buyStock, sellStock } = require("../controllers/tradeController");

router.post("/buy", authMiddleware, buyStock);
router.post("/sell", authMiddleware, sellStock);

module.exports = router;
