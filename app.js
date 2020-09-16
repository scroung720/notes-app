const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(chalk.green('Success!'));
console.log(chalk.bold.green('Bold!'));
console.log(chalk.inverse.red('Inversed!'));