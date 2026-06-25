const Holding = require("../models/Holding");

const getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({
      userId: req.user.userId,
    });

    res.status(200).json(holdings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addHolding = async (req, res) => {
  try {
    const { stock, quantity, avgPrice, currentPrice } = req.body;

    const holding = await Holding.create({
      userId: req.user.userId,
      stock,
      quantity,
      avgPrice,
      currentPrice,
    });

    res.status(201).json(holding);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getHoldings, addHolding };
