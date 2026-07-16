const Holding = require("../models/Holding");

const getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({
      userId: req.user.userId,
    }).sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      holdings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch holdings."
    });
  }
};

module.exports = { getHoldings };
