const Order = require("../models/Order");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getOrders };
