const express = require("express");
const router = express.Router();
const { getOpportunities, createOpportunity, deleteOpportunity } = require("../controllers/opportunityController");

router.get("/", getOpportunities);
router.post("/", createOpportunity);
router.delete("/:id", deleteOpportunity);

module.exports = router;
