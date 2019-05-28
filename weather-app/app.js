const request = require("request");
//const axios = require("axios");

const url =
  "https://api.darksky.net/forecast/dbaed6fe39510456b78d8f9ff538cce2/37.8267,-122.4233?units=si&lang=it";

request({ url, json: true }, (err, res) => {
  if (err) return console.log("Unable to connect weather service.");

  if (res.body.error) return "Unable to find location.";

  const { temperature, precipProbability } = res.body.currently;
  const { summary } = res.body.daily.data[0];
  console.log(
    `${summary} It is curerntly ${temperature} degrees out with ${precipProbability}% chance of rain.`
  );
});

//axios.get(url).then(res => console.log("AXIOS", res.data.currently));

// geolocation
const geoUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyaW9sYXp6YXJpIiwiYSI6ImNqdzg1cjF1OTJsamc0OXFrajdlMHdzeTIifQ.edeBZ58oqdjEMtM_gpX_NA&limit=1";

request({ url: geoUrl, json: true }, (err, res) => {
  if (err) return console.log("Unable to connet geolocation service.");

  if (res.body.error || res.body.features.length === 0)
    return console.log("Unable to find location.");

  const { center } = res.body.features[0];
  const long = center[0];
  const lat = center[1];
  console.log(`Latitude: ${lat}, Longitude: ${long}`);
});
