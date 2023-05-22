//  write node js script to perform task
//  1) create one page with two links (home(/) and about(/about))
//  2) both the pages must contain html type content and add required content on both the pages
//  3) if user adds any other path then it should be redireted to page displayed as page not found (error 404)

var ht = require("http")
var fs = require("fs")
var url= require("url")
// server = ht.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': "text/html" })
//     // data=fs.readFileSync('base.html')
//     res.write("<h1><a href = '/' > Home</a></h1 ><h1><a href='/about'>About Page</a></h1>")
//     // res.end(data)
//     if (req.url == '/') {
//         data = fs.readFileSync('./home.html')
//         res.end(data)
//     }
//     else if (req.url == '/about') {
//         data = fs.readFileSync('./about.html')
//         res.end(data)
//     }
//     else {
//         // res.writeHead(404,{ 'Content-Type': "text/html" })
//         res.end("<h1>Page Not Found</h1>")
//         }
//     // res.end(txt);
// }).listen(3000);
// console.log("Server starts")



// write a node js script to load a simple html file defined as static node js web server and print it's content as html content
addr="http://localhost:1208/4.html"
server = ht.createServer(function (req, res) {
        q=url.parse(addr,true)
        res.writeHead(200, { 'Content-Type': "text/html" })
        data=fs.readFileSync('.'+q.pathname)
        res.end(data)
    }).listen(3000);
    console.log("Server starts")
