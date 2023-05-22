// const url=require('url')

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=february';
var q = url.parse(adr, true);

// console.log(q)
// console.log(q.query) 
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'


// // if year is leap year then create a file named leap year
// var qdata = q.query;
// console.log(qdata.year);
// var year = qdata.year;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("leap year");}



//   write a node js script to print query string of url on console as well as file using es6 call back
fs=require('fs')
url=require('url')
adr="http://localhost:80/blank.html?year=2012&month=february"
q = url.parse(adr, true);
data=q.query
data=JSON.stringify(data)
fs.writeFile('file.txt',data,()=>{
    console.log(data)
})