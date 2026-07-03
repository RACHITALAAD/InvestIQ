const Fund = require("../models/Fund");
const Holding = require("../models/Holding");
const Order = require("../models/Order");

const buyStock = async (req, res) => {
  try {
    const stock = req.body.stock;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);

    const userId = req.user.userId;

    const totalCost = quantity * price;

    const fund = await Fund.findOne({
      userId,
    });
    if (!fund) {
      return res.status(404).json({
        message: "Fund account not found",
      });
    }

    if (fund.availableBalance < totalCost) {
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    fund.availableBalance = fund.availableBalance - totalCost;
    fund.investedAmount = fund.investedAmount + totalCost;
    fund.withdrawableAmount = fund.availableBalance;
    await fund.save();

    const existingHolding = await Holding.findOne({
      userId,
      stock,
    });

    if (existingHolding) {
      const totalQuantity = existingHolding.quantity + quantity;

      existingHolding.avgPrice =
        (existingHolding.quantity * existingHolding.avgPrice +
          quantity * price) /
        totalQuantity;

      existingHolding.quantity = totalQuantity;
      existingHolding.currentPrice = price;
      await existingHolding.save();
    } else {
      await Holding.create({
        userId,
        stock,
        quantity,
        avgPrice: price,
        currentPrice: price,
      });
    }

    await Order.create({
      userId,
      stock,
      type: "BUY",
      quantity,
      price,
      status: "Completed",
    });

    return res.status(200).json({
      success: true,
      message: "Stock purchased successfully",
      fund,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const sellStock = async (req, res) => {
  try {
    const stock = req.body.stock;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);

    const userId = req.user.userId;

    const existingHolding = await Holding.findOne({
      userId,
      stock,
    });

    if (!existingHolding) {
      return res.status(404).json({
        message: "Stock not found in portfolio",
      });
    }
    if (existingHolding.quantity < quantity) {
      return res.status(400).json({
        message: "Not enough shares to sell",
      });
    }

    const fund = await Fund.findOne({
      userId,
    });
    if (!fund) {
      return res.status(404).json({
        message: "Fund account not found",
      });
    }
    const totalAmount = quantity * price;
    fund.availableBalance = fund.availableBalance + totalAmount;
    fund.investedAmount =
      fund.investedAmount - existingHolding.avgPrice * quantity;
    fund.withdrawableAmount = fund.availableBalance;
    await fund.save();
    existingHolding.quantity = existingHolding.quantity - quantity;

    if (existingHolding.quantity === 0) {
      await Holding.findByIdAndDelete(existingHolding._id);
    } else {
      existingHolding.currentPrice = price;
      await existingHolding.save();
    }

    await Order.create({
      userId,
      stock,
      type: "SELL",
      quantity,
      price,
      status: "Completed",
    });
    return res.status(200).json({
      success: true,
      message: "Stock sold successfully",
      fund,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { buyStock, sellStock };
