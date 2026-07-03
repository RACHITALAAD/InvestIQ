const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {getHoldings} = require("../controllers/holdingsController");

router.get("/" , authMiddleware , getHoldings);

module.exports = router;