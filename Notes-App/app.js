//const validator=require('validator');
const getNotes=require("./notes.js");
const chalk=require('chalk');

console.log(getNotes());
//console.log(validator.isEmail('adigmail.com'));
//console.log(validator.isURL('googlecom'));
console.log(chalk.green.bgRed.bold('Success!!!'));





