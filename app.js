const validator = require('validator')
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

const command = process.argv
const yargsCommand = yargs.argv



yargs.command({
    command:'remove',
    describe:'Removes the note from title',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'This will list all the notes',
    handler: function () {
        console.log('Listing notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})

yargs.parse()


