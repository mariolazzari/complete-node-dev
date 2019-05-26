const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

//const fs = require("fs");
//const utils = require("./utils");
const notes = require("./notes");

/*
const output = "notes.txt";
fs.writeFileSync(output, "File created by NodeJS.");
fs.appendFileSync(output, "\nAppended text.");

console.log(utils.name);
console.log(utils.add(2, 5));
*/

notes.getNotes();

// validator
//console.log(validator.isEmail("mario@mario.con"));

// chalk
//console.log(chalk.green.bold.inverse("test"));

// yargs version
yargs.version("1.1.0");

// add command
yargs.command({
  command: "add",
  describe: "Add new note.",
  builder: {
    title: {
      describe: "Type new title.",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Type new body.",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    console.log("Title:", argv.title);
    console.log("Body:", argv.body);
  }
});

// remove
yargs.command({
  command: "remove",
  describe: "Remove note.",
  handler: () => console.log("Delete note.")
});

// list
yargs.command({
  command: "list",
  describe: "List notes.",
  handler: () => console.log("List notes.")
});

// read
yargs.command({
  command: "read",
  describe: "Read note.",
  handler: () => console.log("Read note.")
});

// parse arguments line
yargs.parse();
