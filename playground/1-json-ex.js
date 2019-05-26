const fs = require("fs");

// load json data
const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();

// create js obj
const data = JSON.parse(dataJson);
// set my own data
data.name = "Mario";
data.age = 44;
// save obj to file
fs.writeFileSync("1-json.json", JSON.stringify(data));
