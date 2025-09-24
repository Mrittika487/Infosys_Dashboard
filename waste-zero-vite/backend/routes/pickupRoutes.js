const express = require("express");
const router = express.Router();
const { getPickups, createPickup, deletePickup } = require("../controllers/pickupController");

router.get("/", getPickups);
router.post("/", createPickup);
router.delete("/:id", deletePickup);

module.exports = router;
