const Holding = require("../models/Holding");
const Fund = require("../models/Fund");
const Order = require("../models/Order");

const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.userId;
    const holdings = await Holding.find({ userId }).sort({ stock: 1 });

    const fund = await Fund.findOne({ userId });

    const recentOrders = await Order.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5);

    let portfolioValue = 0;
    let investedAmount = 0;

    holdings.forEach((holding) => {
      portfolioValue += holding.quantity * holding.currentPrice;
      investedAmount += holding.quantity * holding.avgPrice;
    });

    const totalProfit = portfolioValue - investedAmount;

    res.status(200).json({
      success: true,

      summary: {
        portfolioValue,
        investedAmount,
        totalProfit,
        availableFunds: fund?.availableBalance || 0,
        holdingsCount: holdings.length,
      },

      holdings,

      recentOrders,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to load dashboard data.",
    });
  }
};

module.exports = {
  getDashboardData,
};
