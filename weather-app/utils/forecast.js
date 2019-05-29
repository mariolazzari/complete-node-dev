const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/dbaed6fe39510456b78d8f9ff538cce2/${latitude},${longitude}?units=si&lang=it`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect weather service.");
    } else if (res.body.error) {
      callback("Unable to find location.");
    } else {
      const { temperature, precipProbability } = res.body.currently;
      const { summary } = res.body.daily.data[0];
      callback(
        undefined,
        `${summary} It is curerntly ${temperature} degrees out with ${precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
