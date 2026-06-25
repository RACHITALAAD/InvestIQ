const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema(
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

    quantity: {
      type: Number,
      required: true,
    },

    avgPrice: {
      type: Number,
      required: true,
    },
    
    currentPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Holding", holdingSchema);
