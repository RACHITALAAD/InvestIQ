const { default: mongoose } = require("mongoose");

const fundSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    availableBalance: {
      type: Number,
      default: 0,
    },

    investedAmount: {
      type: Number,
      default: 0,
    },

    withdrawableAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Fund", fundSchema);
