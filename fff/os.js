// os=require('os')
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.tmpdir())
// console.log(os.platform())
// console.log(os.freemem()/(1024*1024*1024))

// write a node js script to create a folder named abc at temp folder.also create temp.txt inside abc such that if available physical mem is greater than 1GB then print the message sufficient memory in the file else print the message low memory in the file.

const fs=require("fs")
const os=require("os")
// fs.mkdirSync('abc')
if (os.freemem()/(1024*1024*1024)>1){
    fs.writeFileSync("/home/smit/Desktop/sem-iv/fsd-2/abc/temp.txt",'sufficient memory')
}
else{
    fs.writeFileSync("/home/smit/Desktop/sem-iv/fsd-2/abc/temp.txt",'insufficient memory')
}