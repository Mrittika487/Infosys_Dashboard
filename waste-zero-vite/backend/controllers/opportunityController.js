const Opportunity = require("../models/Opportunity");

// Get all opportunities
exports.getOpportunities = async (req, res) => {
  const opps = await Opportunity.find().sort({ createdAt: -1 });
  res.json(opps);
};

// Create opportunity
exports.createOpportunity = async (req, res) => {
  try {
    const opp = new Opportunity(req.body);
    const saved = await opp.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete opportunity
exports.deleteOpportunity = async (req, res) => {
  try {
    await Opportunity.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ error: "Opportunity not found" });
  }
};
