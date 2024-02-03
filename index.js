// Module package CORE

/* 
setTimeout(function() {
    console.log('ishga tushdi')
}, 5000);
*/

/*
let number = 0;
setInterval(function() {
    console.log("hisob", number);
    number++;
}, 1000);
*/

/*
const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');
console.log(data);

console.log('********************');

fs.writeFileSync("./input.txt", `${data} \n\t\t by BekzodAli`);
const new_data = fs.readFileSync('./input.txt', 'utf8');
console.log(new_data);

*/
//Module Package EXTERNAL

//const moment = require("moment");
//const time = moment().format();
//console.log(time);

//console.log("------------------------")

//const moment = require("moment");
//setInterval(() => {
//    const time = moment().format();
//    console.log(`hozirgi vaqt ${time}`);
//}, 5000);

//console.log("------------------------")

/*
const inquirer = require("inquirer");

inquirer
  .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])

  .then((answer) => {
    console.log("man kiritgan raqam qiymati: ", answer.raqam);
  })
  .catch((err) => console.log(err));
*/

/*

 const validator = require("validator");
 //const test = validator.isEmail("foo@bar.com");
 //const test = validator.isInt("100");
 //const test = validator.isIP("114.200.35.154");
 console.log("test:", test);
*/
/*

const {v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random", random);

*/

/*
const {v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random", random);

const chalk = require("chalk");
const log = console.log;

//log(chalk.blue("Hello") + random + chalk.red("  !"));
log(chalk.blue(`uuid creates ${random}`));

*/

//Modul package FILE

/*

const calculate = require('./hisob.js');
const natija = calculate.kopaytirish(80, 20);
console.log('Natija:', natija);
console.log('********************')

const natija2 = calculate.qoshish(80, 20);
console.log('Natija:', natija2);
console.log('********************')

const natija3 = calculate.ayirish(80, 20);
console.log('Natija:', natija3);
console.log('********************')
*/

//console.log(require('module').wrapper);

//console.log(arguments);

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("****************");

const myAccount = new Account("Martin", 200000, 9745548548554);
myAccount.giveMeDetails();
myAccount.makeDeposit(1000000);

//bugatti chiyron 2,4 mln usd
// myAccount.withdrawMoney(2400000);
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);
