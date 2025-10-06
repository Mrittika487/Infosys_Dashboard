const Pickup = require("../models/Pickup");

// Get all pickups
exports.getPickups = async (req, res) => {
  const pickups = await Pickup.find().sort({ createdAt: -1 });
  res.json(pickups);
};

// Create a pickup
exports.createPickup = async (req, res) => {
  try {
    const pickup = new Pickup(req.body);
    const saved = await pickup.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete pickup
exports.deletePickup = async (req, res) => {
  try {
    await Pickup.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ error: "Pickup not found" });
  }
};
