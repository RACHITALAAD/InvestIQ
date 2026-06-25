const Order = require("../models/Order");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.userId,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addOrder = async (req, res) => {
  try {
    const { stock, type, quantity, price, status } = req.body;

    const order = await Order.create({
      userId: req.user.userId,
      stock,
      type,
      quantity,
      price,
      status,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
        message: error.message,
    });
  }
};

module.exports = {getOrders , addOrder};

