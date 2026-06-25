const Holding = require("../models/Holding");
const Fund = require("../models/Fund");

const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.userId;
    const holdings = await Holdings.find({ userId });
    const funds = await Fund.findOne({ userId });

    let portfolioValue = 0;
    let totalInvestment = 0;

    holdings.forEach((holding) => {
      portfolioValue = portfolioValue + holding.quantity * holding.currentPrice;

      totalInvestment = totalInvestment + holding.quantity * holding.avgPrice;
    });

    const todaysGain = portfolioValue - totalInvestment;

    res
      .status(200)
      .json({
        portfolioValue,
        todaysGain,
        availableFunds: funds?.availableBalance || 0,
        holdingsCount: holdings.length,
        holdings,
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getDashboardData };
