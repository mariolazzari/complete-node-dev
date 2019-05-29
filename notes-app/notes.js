const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  console.log("Your notes...");
};

const addNote = (title, body) => {
  const notes = loadNotes();

  debugger;

  // check duplicates note
  const dupNotes = notes.filter(n => n.title === title);
  if (dupNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added."));
  } else {
    console.log(chalk.red.inverse(`Note already present with title ${title}`));
  }
};

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const removeNote = title => {
  let notes = loadNotes();
  const note = notes.find(n => n.title === title);
  if (note) {
    console.log(chalk.green.inverse("Note removed."));
    notes = notes.filter(n => n.title !== title);
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse(`Note not found with title ${title}`));
  }
};

const listNotes = () => {
  console.log(chalk.green.inverse("Your notes"));
  loadNotes().forEach(({ title }) => console.log(title));
};

const readNote = title => {
  const note = loadNotes().find(n => n.title === title);
  if (note) {
    console.log(chalk.green.inverse(`Note found with title ${title}`));
    console.log(note);
  } else {
    console.log(chalk.red.inverse(`Note not found with title ${title}`));
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
