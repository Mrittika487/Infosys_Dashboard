const mongoose = require("mongoose");

const pickupSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  pickupDate: { type: String, required: true },
  timeSlot: { type: String, required: true },
  wasteTypes: [{ type: String }],
  additionalNotes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Pickup", pickupSchema);
