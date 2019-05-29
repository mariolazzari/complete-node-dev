const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWFyaW9sYXp6YXJpIiwiYSI6ImNqdzg1cjF1OTJsamc0OXFrajdlMHdzeTIifQ.edeBZ58oqdjEMtM_gpX_NA&limit=1`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connecto to geolocation service.");
    } else if (response.body.features.length === 0) {
      callback("Unable to find location..");
    } else {
      const { center, place_name } = response.body.features[0];

      callback(undefined, {
        latitude: center[0],
        longitude: center[1],
        location: place_name
      });
    }
  });
};

module.exports = geocode;
