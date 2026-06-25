const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {getFunds , updateFunds} = require("../controllers/fundsController");

router.get("/" , authMiddleware , getFunds);

router.put("/" , authMiddleware , updateFunds);

module.exports = router;
