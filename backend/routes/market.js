const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getMarketStocks,
  getStockBySymbol,
} = require("../controllers/marketController");

router.get("/", authMiddleware, getMarketStocks);
router.get("/:symbol", authMiddleware, getStockBySymbol);

module.exports = router;
