const yargs = require("yargs");
const notes = require("./notes");

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
  handler: ({ title, body }) => notes.addNote(title, body)
});

// remove
yargs.command({
  command: "remove",
  describe: "Remove note.",
  builder: {
    title: {
      describe: "Type title to remove.",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ title }) => notes.removeNote(title)
});

// list
yargs.command({
  command: "list",
  describe: "List notes.",
  handler: () => notes.listNotes()
});

// read
yargs.command({
  command: "read",
  describe: "Read note.",
  builder: {
    title: {
      describe: "Type title to read.",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ title }) => notes.readNote(title)
});

// parse arguments line
yargs.parse();
