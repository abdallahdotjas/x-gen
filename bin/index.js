#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const yargs = require('yargs');


const options = yargs
  .usage("Usage: -n <name>")
  .option("n", {alias: "name", describe: "Your name", type: "string" })
  .option("cs:c", { alias: "csharp:class", describe: "create csharp command", type: "string"})
  .argv;

if(options["csharp:class"]) {
  console.log(`You are trying to generate a C# Class: ${options["csharp:class"]}`);
  return;
}

const greeting = chalk.white.bold(`Name:  ${options.name}`);

const boxenOptions = {
  padding: 1,
  margin: 1, 
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555"
};

const msgBox = boxen( greeting, boxenOptions);

console.log(msgBox);
