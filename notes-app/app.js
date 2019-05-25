const fs = require("fs");
const utils = require("./utils");
const notes = require("./notes");

const output = "notes.txt";
fs.writeFileSync(output, "File created by NodeJS.");
fs.appendFileSync(output, "\nAppended text.");

console.log(utils.name);
console.log(utils.add(2, 5));

notes.getNotes();
