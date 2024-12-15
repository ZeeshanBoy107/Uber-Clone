const {
  getCaptainsInTheRadius,
  getAddressCoordinate,
} = require("../services/maps.service");
const { createRide, getFare } = require("../services/ride.service");
const { validationResult } = require("express-validator");
const { sendMessageToSocketId } = require("../socket");
const Ride = require("../models/ride.model");

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
    res.status(200).json({ ride: ride });

    const pickupCoordinates = await getAddressCoordinate(pickup);

    console.log("pickup", pickupCoordinates);

    Promise.all([
      getCaptainsInTheRadius(
        pickupCoordinates.lng,
        pickupCoordinates.ltd,
        2
      ),
      getCaptainsInTheRadius(
        pickupCoordinates.lng,
        pickupCoordinates.ltd,
        2
      ),
    ]);
      const captainsInRadius = await getCaptainsInTheRadius(
        pickupCoordinates.lng,
        pickupCoordinates.ltd,
        2
      );
    console.log("captainsInRadius", captainsInRadius);

    // const captainsInRadius = captains.filter((captain) => captain.isAvailable);

    ride.otp = "";

    const rideWithUser = await Ride.findOne({ _id: ride._id }).populate("user");

    captainsInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      })
    });
  } catch (error) {
    console.log(error);
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
    res.status(200).json({ fare: fare });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRideController, getFareController };
