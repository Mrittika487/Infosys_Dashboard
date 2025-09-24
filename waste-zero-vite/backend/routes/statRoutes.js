const express = require("express");
const router = express.Router();
const { getStats, updateStats } = require("../controllers/statController");

router.get("/", getStats);
router.post("/", updateStats);

module.exports = router;
