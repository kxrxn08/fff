// var d= require("./newModule")
// console.log(d.add(10,20))
// console.log(d.sub(20,10))

// var {add,sub}=require("./newModule")
// console.log(add(100,200))
// console.log(sub(200,100))


// create an own module having function named myDateTime that returns today's date in IST , print this data on http web server in node js file
// var ht=require("http") 
// var d= require("./newModule");
// const { stringify } = require("querystring");
// server = ht.createServer(function (req, res) {
//         res.writeHead(200, { 'Content-Type': "text/html" })
//         data=d()
//         // console.log(data)
//         res.write(data) 
//         res.end()
//     }).listen(3010);
//     console.log("Server starts")

    // write a node js script to create an own module to calculate the reverse of a given number.
    // that reverse module is defined as it should compute all numbers between 1 to 100  in which square of reverse and reverse of square of the number is same

const reverseModule = require("./newModule");
console.log(reverseModule.reverse());
reverseModule.loop();