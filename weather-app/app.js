const request = require("request");
//const axios = require("axios");

const url =
  "https://api.darksky.net/forecast/dbaed6fe39510456b78d8f9ff538cce2/37.8267,-122.4233?units=si&lang=it";

request({ url, json: true }, (err, res) => {
  if (err) return console.log(err);

  const { temperature, precipProbability } = res.body.currently;
  const { summary } = res.body.daily.data[0];
  console.log(
    `${summary} It is curerntly ${temperature} degrees  out with ${precipProbability}% chance of rain.`
  );
});

//axios.get(url).then(res => console.log("AXIOS", res.data.currently));
