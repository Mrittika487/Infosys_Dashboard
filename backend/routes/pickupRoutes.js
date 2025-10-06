const express = require('express');
const router = express.Router();
const pickupController = require('../controllers/pickupController');

router.get('/', pickupController.getPickups);
router.post('/', pickupController.createPickup);
// Add update, delete routes similarly

module.exports = router;
