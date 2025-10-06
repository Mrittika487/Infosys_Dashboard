const Pickup = require('../models/Pickup');

exports.getPickups = async (req, res) => {
  try {
    const pickups = await Pickup.find().populate('user', 'name email');
    res.json(pickups);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createPickup = async (req, res) => {
  try {
    const { user, date, location } = req.body;
    const pickup = new Pickup({ user, date, location });
    await pickup.save();
    res.status(201).json(pickup);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create pickup' });
  }
};
