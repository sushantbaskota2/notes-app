const validator = require('validator')
const notes = require('./notes.js')
const chalk = require('chalk')


console.log(notes());

console.log(validator.isURL('https:/mead.io'))

console.log(chalk.bgGreen.inverse.bold("Successful!"))
