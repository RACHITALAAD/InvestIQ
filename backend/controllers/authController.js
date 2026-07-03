const User = require("../models/User");
const Fund = require("../models/Fund");
const Holding = require("../models/Holding");
const Order = require("../models/Order");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    await Fund.create({
      userId: user._id,
      availableBalance: 20000,
      investedAmount: 0,
      withdrawableAmount: 20000,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const existingUser = await User.findOne({ email });
    
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: existingUser._id,
        userName: existingUser.userName,
        email: existingUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const fund = await Fund.findOne({ userId });

    const holdings = await Holding.find({ userId });

    const totalOrders = await Order.countDocuments({ userId });

    let portfolioValue = 0;

    holdings.forEach((holding) => {
      portfolioValue += holding.quantity * holding.currentPrice;
    });

    res.status(200).json({
      success: true,

      profile: {
        id: user._id,

        userName: user.userName,

        email: user.email,

        createdAt: user.createdAt,

        availableFunds: fund?.availableBalance || 0,

        portfolioValue,

        holdingsCount: holdings.length,

        totalOrders,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signup, login, getProfile };
