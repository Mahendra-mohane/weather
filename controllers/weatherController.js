const weatherService = require('../services/weatherService');

exports.getCurrentWeather = async (req, res, next) => {
  try {
    const { city } = req.query;
    const weatherData = await weatherService.getCurrentWeather(city);

    res.json(weatherData);
  } catch (err) {
    next(err);
  }
};