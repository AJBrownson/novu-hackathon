const axios = require("axios");

const dotenv = require("dotenv").config;

// getCurrentWeather, getWeatherForecast, getWeatherForecastHourly, getCurrentAirPollution
// @desc    Get user weather info
// @route   GET /api/weather
// @access  Public

const getCurrentWeather = async (req, res) => {
  const { latitude, longitude } = req.query;
//   const API_KEY = process.env.TEMPI_API_KEY;
const API_KEY = "d26037d7bf49c6a31cfcf546d9f05704";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  axios.get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error in recieving weather data");
    });
};



// @desc    Search for specific weather info
// @route   GET /api/weather/:id
// @access  Public

const getLocationWeather = async (req, res) => {
  console.log;
};

module.exports = {
  getCurrentWeather,
  getLocationWeather,
};
