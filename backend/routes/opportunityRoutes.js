const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const opportunityController = require('../controllers/opportunityController');

router.post(
  '/',
  auth,
  body('title').notEmpty().withMessage('Title is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  opportunityController.createOpportunity
);

router.get('/', auth, opportunityController.getOpportunities);

module.exports = router;
