const fs = require("fs");

const book = {
  title: "Book title",
  author: "Book author"
};

// JSON rappresentation on object
const bookJSON = JSON.stringify(book);
console.log(book);
console.log(bookJSON);
// convert json string to object
const parsedJson = JSON.parse(bookJSON);
//console.log(bookJSON.title); -> error!
console.log(parsedJson.author);

// save json data to file
fs.writeFileSync("1-json.json", bookJSON);
// read json data from file
const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

console.log(data.title);
