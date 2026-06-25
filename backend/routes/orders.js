const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { getOrders, addOrder } = require("../controllers/ordersController");

router.get("/", authMiddleware, getOrders);

router.post("/", authMiddleware, addOrder);

module.exports = router;
