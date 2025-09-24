const mongoose = require("mongoose");

const statSchema = new mongoose.Schema({
  totalPickups: { type: Number, default: 0 },
  wasteCollectedKg: { type: Number, default: 0 },
  recyclingRate: { type: String, default: "0%" },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Stat", statSchema);
