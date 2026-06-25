const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {getHoldings , addHolding} = require("../controllers/holdingsController");

router.get("/" , authMiddleware , getHoldings);
router.post("/" , authMiddleware , addHolding);

module.exports = router;