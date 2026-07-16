const Holding = require("../models/Holding");
const Order = require("../models/Order");

const getInsights = async (req, res) => {
  try {
    const userId = req.user.userId;

    const holdings = await Holding.find({ userId });
    const orders = await Order.find({ userId });

    let investedAmount = 0;
    let portfolioValue = 0;

    let bestPerformer = null;
    let worstPerformer = null;

    const allocation = [];
    const holdingsPerformance = [];

    let profitableStocks = 0;
    let lossStocks = 0;

    holdings.forEach((stock) => {
      const investment = stock.quantity * stock.avgPrice;
      const currentValue = stock.quantity * stock.currentPrice;
      const profit = currentValue - investment;

      const returnPercentage = investment > 0 ? (profit / investment) * 100 : 0;

      investedAmount += investment;
      portfolioValue += currentValue;

      allocation.push({
        stock: stock.stock,
        value: currentValue,
      });

      holdingsPerformance.push({
        stock: stock.stock,
        investment,
        currentValue,
        profit,
      });

      if (profit >= 0) {
        profitableStocks++;
      } else {
        lossStocks++;
      }

      if (!bestPerformer || returnPercentage > bestPerformer.returnPercentage) {
        bestPerformer = {
          stock: stock.stock,
          returnPercentage,
        };
      }

      if (
        !worstPerformer ||
        returnPercentage < worstPerformer.returnPercentage
      ) {
        worstPerformer = {
          stock: stock.stock,
          returnPercentage,
        };
      }
    });

    if (
      holdings.length <= 1 ||
      (bestPerformer &&
        worstPerformer &&
        bestPerformer.returnPercentage === worstPerformer.returnPercentage)
    ) {
      bestPerformer = null;
      worstPerformer = null;
    }

    const totalProfit = portfolioValue - investedAmount;

    const overallReturn =
      investedAmount > 0 ? (totalProfit / investedAmount) * 100 : 0;

    const buyOrders = orders.filter((order) => order.type === "BUY").length;

    const sellOrders = orders.filter((order) => order.type === "SELL").length;

    res.status(200).json({
      success: true,

      investedAmount,

      portfolioValue,

      totalProfit,

      overallReturn,

      buyOrders,

      sellOrders,

      totalOrders: orders.length,

      profitableStocks,

      lossStocks,

      totalHoldings: holdings.length,

      bestPerformer,

      worstPerformer,

      allocation,

      holdingsPerformance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch portfolio insights.",
    });
  }
};

module.exports = { getInsights };
