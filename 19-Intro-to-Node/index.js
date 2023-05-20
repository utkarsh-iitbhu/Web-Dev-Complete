// jshint esversion:6

// import fs from "fs";
// const fs = require("fs");

// fs.copyFileSync("file1.txt","file2.txt");

// console.log("Hello");

var superheroes = require("superheroes");
var myHero = superheroes.random(); 
// console.log(myHero);

var supervillaina = require("supervillains");
var myVillain = supervillaina.random();
console.log(myHero+" v/s "+myVillain);
