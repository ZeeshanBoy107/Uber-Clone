const axios = require("axios");
const Captain = require("../models/captain.model");

const getAddressCoordinate = async (address) => {
  if (!address) {
    throw new Error("Address is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      if (!location) {
        throw new Error("Unable to fetch coordinates here");
      }
      console.log("location:", location);
      return {
        lng: location.lng,
        ltd: location.lat,
      };
    } else {
      throw new Error("Unable to fetch coordinates here");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDistanceTimeService = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSuggestionsService = async (input) => {
  if (!input) {
    throw new Error("Input is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions
        .map((prediction) => prediction.description)
        .filter((value) => value);
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCaptainsInTheRadius = async (lng, ltd, radius) => {
  if (!lng || !ltd || !radius) {
    throw new Error("Longitude, latitude and radius are required");
  }
  console.log(lng, ltd, radius);
  const captains = await Captain.find({
    location: {
      $geoWithin: {
        $centerSphere: [[lng, ltd], radius/6371],
      },
    },
  });
  console.log(captains);
  return captains;
}

module.exports = {
  getAddressCoordinate,
  getDistanceTimeService,
  getSuggestionsService,
  getCaptainsInTheRadius
};
