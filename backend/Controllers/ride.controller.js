const { createRide, getFare } = require("../services/ride.service");
const { validationResult } = require("express-validator");

const createRideController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;

  try {
    const ride = await createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json({ ride });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFareController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
 
  const { pickup, destination } = req.query;

  try {
    const fare = await getFare(pickup, destination);
    res.status(200).json({ fare: fare});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRideController, getFareController };
