const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger;

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
};

const readNotes = (title) => {
    const notes = loadNotes();
    const thisNote = notes.find((note) => note.title === title);

    if (thisNote) {
        console.log(chalk.blue('Title: '), thisNote.title, chalk.green('\nNote: '), thisNote.body);
    } else {
        console.log(chalk.red.inverse("Note with this title doesn't exist. "));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => console.log(note.title));
};

const removeNotes = (title) => {
    console.log('Removing note with title: ', title);
    const notes = loadNotes();
    const removedNotes = notes.filter((note) => {
        return note.title !== title;
    });
    console.log(notes, removedNotes);
    if (notes.length > removedNotes.length) {
        console.log(chalk.green.inverse('Note Removed!'));
    } else {
        console.log(chalk.red.inverse('No notes were removed!'));
    }

    saveNotes(removedNotes);
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};
