#!/usr/bin/env node


const yargs = require('yargs');
const gen = require('./../src/index.js')

const fs = require('fs')

const options = yargs
  .usage("Usage: -n <name>")
  .option("n", {alias: "name", describe: "Your name", type: "string" })
  .option("c", { alias: "csharp", describe: "create csharp command", type: "string"})
  .argv;


  console.log(options)
if(options.c) {
  console.log(`You are trying to generate a C# Class: ${options.csharp}`);
  const data = fs.readFile(options.csharp, 'utf8', (err, data) => {
    if(err)
    {
      console.log(`Error reading file from disk: ${err}`);
      return;
    }  
    
    gen.createdotcs(JSON.parse(data));
  });
  return;
}
console.log(`Your name is: ${options.name}`)
