const axios = require("axios");

// @desc    Get user weather info
// @route   GET /api/weather
// @access  Public

const getCurrentWeather = async (req, res) => {
  const { latitude, longitude } = req.query;
  const API_KEY = process.env.TEMPI_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;
    res.send(weatherData);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving weather data');
  }
};



module.exports = {
  getCurrentWeather
};
