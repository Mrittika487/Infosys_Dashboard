const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  location: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pickup', pickupSchema);
