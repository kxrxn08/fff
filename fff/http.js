// const url= require('url')
adr="http://localhost:80/blank.html?year=2012&month=february"
// const p=require("http")
// server=p.createServer(function(req,res){
//     // res.writeHead(200,{'content-type':'text/html'})
//     // res.write(req.url)
//     // res.write("<h1>HElLO</h1>")
//     q=url.parse(adr,true).query
//     var text=q.year + " " + q.month
//     res.end(text)
// })
// server.listen(3000)
// console.log("listening")

ht=require("http");
url=require("url");
server=ht.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    q=url.parse(req.url,true).query
    txt=q.year+" "+q.month
    res.end(txt)
})
server.listen(3003)
console.log("server started")
console.log("listening")