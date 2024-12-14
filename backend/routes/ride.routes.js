const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const { createRideController, getFareController } = require('../Controllers/ride.controller');
const { authUser } = require('../middlewares/auth.middleware');

router.post('/create', 
  [
   body('pickup').isString().isLength({min: 3}).withMessage('Pickup is required'),
   body('destination').isString().isLength({min: 3}).withMessage('Destination is required'),
   body('vehicleType').isString().isLength({min: 3}).withMessage('Vehicle type is required'),
   body('vehicleType').isIn(['bike', 'car', 'auto']).withMessage('Invalid vehicle type'),
  ],
  authUser, createRideController
)

router.get('/fare', 
  authUser,
  query('pickup').isString().isLength({min: 3}).withMessage('Pickup is required'),
  query('destination').isString().isLength({min: 3}).withMessage('Destination is required'),
  getFareController)

module.exports = router;