const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    stock: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["BUY", "SELL"],
      requied: true,
    },

    quantity: {
      type: Number,
      requied: true,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Completed",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Order", orderSchema);
