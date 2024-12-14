const express = require('express');
const router = express.Router();
const { getCoordinates, getDistanceTime, getAutocompleteSuggestions } = require("../Controllers/map.controller");
const { authUser, authCaptain } = require("../middlewares/auth.middleware");
const { query } = require('express-validator')

router.get('/get-coordinates',
    query('address').isLength({min: 3}).withMessage('Address is required'),
    query('address').isString().withMessage('Address must be a string'),
  authUser, getCoordinates
);

router.get(
  "/get-distance-time",
  [
    query("origin")
      .isLength({ min: 3 })
      .withMessage("Origin is required and must be at least 3 characters long")
      .isString()
      .withMessage("Origin must be a string"),
    query("destination")
      .isLength({ min: 3 })
      .withMessage(
        "Destination is required and must be at least 3 characters long"
      )
      .isString()
      .withMessage("Destination must be a string"),
  ],
  authUser,
  getDistanceTime
);

router.get('/get-suggestions',
  query('input').isString().isLength({min: 3}).withMessage('Input is required and must be a string'),
  authUser, getAutocompleteSuggestions
)

module.exports = router;