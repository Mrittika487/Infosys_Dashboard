const Opportunity = require('../models/Opportunity');

exports.getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find().populate('createdBy', 'name');
    res.json(opportunities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOpportunity = async (req, res) => {
  try {
    const opportunity = new Opportunity(req.body);
    await opportunity.save();
    res.status(201).json(opportunity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add update, delete similarly
