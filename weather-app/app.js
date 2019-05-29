const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  return console.log("Please provide an address.");
}

geocode(address, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  }

  console.log(`Previsioni del tempo a ${location}`);
  forecast(latitude, longitude, (error, data) => {
    console.log(data);
  });
});
