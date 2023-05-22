var E = require('events')
var ee = new E()
// ee.on('start',(a,b)=>{
//     console.log("started")
//     console.log(`started from ${a} to ${b}`)
// });
// ee.emit('start',1,10)


// var mark =(msg)=>{
//     console.log("message from mark" + msg)
// }
// var sam =(msg)=>{
//     console.log("message from sam" + msg)
// }
// ee.on('myevent',mark)
// ee.on('myevent',mark)
// ee.on('myevent',sam)

// ee.removeListener('myevent',mark)
// ee.emit('myevent','hello')
// ee.removeAllListeners('myevent')
// ee.emit('myevent','hello2')


// ee.on('connection',function(){
//     console.log("successfully")
//     ee.emit('data-received')
// })
// ee.on('data-received',function(){
//     console.log('data received successfully')
// })
// ee.emit('connection')
// console.log('Thanks')

// Write a node js script for sequence of operastions using event    as    1) write a file named abc.txt with some data and print the message file written successfully 2) append some data to the file named abc.txt and print the message data appended successfully 3) read that data from the file and print on console after all ops print the message all operations done successfully.ˀˀ 

var fs=require('fs')
const { stringify } = require('querystring')
ee.on('write',function(){
    fs.writeFileSync('abc2.txt','aabbcc')
    ee.emit('append','\naả̉̉̉̉abbcccc')
})
ee.on('append',function(data){
    fs.appendFileSync('abc2.txt',data)
    ee.emit('read')
})
ee.on('read',function(){
    a=fs.readFileSync('abc2.txt','utf-8')
    console.log(a)
})
ee.emit('write')
console.log('all ops done successfully')
console.log('thanks')
console.log(__dirname);
console.log(__filename);