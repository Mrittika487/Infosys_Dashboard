const Stat = require("../models/Stat");

// Get stats
exports.getStats = async (req, res) => {
  let stats = await Stat.findOne();
  if (!stats) {
    stats = await Stat.create({});
  }
  res.json(stats);
};

// Update stats
exports.updateStats = async (req, res) => {
  try {
    let stats = await Stat.findOne();
    if (!stats) {
      stats = new Stat(req.body);
    } else {
      stats.set(req.body);
      stats.updatedAt = new Date();
    }
    const saved = await stats.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
