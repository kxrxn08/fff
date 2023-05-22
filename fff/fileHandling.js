/*
    functions
1} WriteFileSync("file_name or path_name","data") -> synchronous -> blocking
   Writefile("file_name or path_name",callback)-> asynchronous ->non blocking
2) ReadfileSync("file_name or path_name","utf-8")  
   Readfile("file_name or path_name","callback")
3) appendFileSync("file_name","data")
   appendFile("file_name",callback)
4) renameSync("old_name","new_name")
    rename("old_name","new_name")
5) unlinkSync("file_name")
    unlink("file_name")
6) mkdirSync("file_name")
    mkdir("file_name")
7) rmdirSync("file_name")
    rmdir("file_name")
*/


// Reading a file:

// fs=require("fs")
// a=fs.readFileSync
// ("abc.txt")
// console.log(a.toString())




// write a js code with the following file system methods that shows 
// 1) create a folder
// 2) create a file inside that folder
// 3) append some data to that file
// 4) read that data from that file
// 5) rename that file

// 1
// fs.mkdirSync("/home/smit/Desktop/sem-iv/fsd-2/aaa")  

// 2
// fs.writeFileSync("/h
// ome/smit/Desktop/sem-iv/fsd-2/aaa/abc.txt","avbx")

// 4
// fs.appendFileSync("/home/smit/Desktop/sem-iv/fsd-2/aaa/abc.txt","append")

// 5
// a=fs.readFileSync("/home/smit/Desktop/sem-iv/fsd-2/aaa/abc.txt")
// console.log(a.toString())

// 6
// fs.renameSync("/home/smit/Desktop/sem-iv/fsd-2/aaa/abc.txt","/home/smit/Desktop/sem-iv/fsd-2/aaa/aaa.txt")

// 7
// fs.unlinkSync("/home/smit/Desktop/sem-iv/fsd-2/aaa/aaa.txt")


// 8
// fs.rmdirSync("/home/smit/Desktop/sem-iv/fsd-2/aaa")
// console.log("ended")
// var fs=require("fs")
// p.readFile("/home/smit/Desktop/sem-iv/fsd-2/aaa/abc.txt",function(err,data){
// if(err)
// {
//     console.log("Completed");
// }
// console.log(data.toString())

// })
// console.log("Ended");


// writ a node js script to copy contents of one file to another file.Data to be fetched from source.txt to destination.txt
// fs.writeFileSync('/home/smit/Desktop/sem-iv/fsd-2/aaa/source.txt','jfnioaklfm')
// data=fs.readFileSync("/home/smit/Desktop/sem-iv/fsd-2/aaa/source.txt",'utf-8')
// console.log(data)
// fs.writeFileSync('/home/smit/Desktop/sem-iv/fsd-2/aaa/destination.txt',data)



// write data to a file,appending some more data to that file and then reading the file data using async
// fs.appendFile("/home/smit/Desktop/sem-iv/fsd-2/aaa/abc.txt","1234567890",function(err){
// if(err)
// {
//     console.log("Completed1");
// }
// // console.log(data)
// // data=fs.readFile("/aaa/abc.txt")
// })
// console.log("Ended2");


// fs.readFile("/home/smit/Desktop/sem-iv/fsd-2/aaa/abc.txt",'utf-8',function(err,data){
//     if(err)
//     {
//         console.log("Completed2");
//     }
//     console.log(data)
//     })
//     console.log("Ended2");

// write data to a file having 5 numbers and after reading data from the file sort that data into ascending order
// const fs = require('fs');
// const data = [4, 2, 1, 5, 3];
// fs.writeFile('example.txt', data.join(''), (err) => {
//   if (err){
//     console.log(err)
//   }
//   console.log('Data written to file.');
//   fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     console.log('Original file contents:', data.split(''));
//     const dataArray = data.split('');
//     const sortedData = dataArray.sort((a, b) => a-b);
//     console.log('Sorted data:', sortedData);
//   });
// });


// defining an array of object with properties name and age . write this object in a file named student.txt and then read the file and display the object properties on console.
// const fs=require("fs")
// var arr={'name':'karan','age':20}
// fs.writeFile('student.txt',JSON.stringify(arr),(err)=>{
//     if(err){
//         console.log("err")
//     }
// })
// fs.readFile('student.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         var arr2=JSON.parse(data)
//         console.log("Data is",arr2)
//     }
// })


// create a json object which contains array of object name shape with properties 1)name,diameter 2)name,side calculate perimeter of square and perimeter of circle by using values of side and diameter .By reading the file to the console.




// const fs=require("fs")
// var arr=[{'name':'circle','diameter':10},{'name':'square','side':10}]
// fs.writeFile('student.txt',JSON.stringify(arr),(err)=>{
//     if(err){
//         console.log("err")
//     }
// })
// fs.readFile('student.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         var arr2=JSON.parse(data)
//         console.log("Data is",arr2)
//         console.log("perimeter of circle",arr2[0]['diameter']*3.14)
//         console.log("perimeter of square",arr2[1]['side']*4)
//     }
// })


// write a js code to convert a csv file to json in js
// const fs = require("fs")
// var data = fs.readFileSync('train.csv', 'utf8')
// const arr = data.split(',')
// var json =JSON.stringify(arr)
// console.log(json)
// fs.writeFileSync('train.json', json)



// create an html file and write data as code to print hello in h1 heading with red color style and print the data from that file to console
// fs=require('fs')
// data="<!DOCTYPE html><html><head><title>Document</title></head><body><h1 style='color: red'>hello</h1></body></html>"
// fs.writeFileSync("file.html",data)


// write a node js script to create a class named person by assigning name and age in the form of members of class. Create 1 function named elder which returns elder person object. Details of elder person should be printed on a console as well as file named person.txt .


// fs=require('fs')
// class person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     static elder(a,b){
//         if (a.age>b.age){
//             return a
//         }
//         else{
//             return b
//         }
// }
// }
// const aa= new person("karan",20)
// const bb=new person("aaa",18)
// console.log(person.elder(aa,bb))
// fs.writeFileSync("person.txt",JSON.stringify(person.elder(aa,bb))) 


// write a node js script to create a class named time and assign members hours , minutes, seconds. create 2 objects of time class and add both the objects so that it should return the value in third time object.the 3rd time object should  have h,m,s such that after addition if seconds exceeds 60 then minutes value should be ++ and if min >60 then hour ++.the value should be printed and should be written into a file

class time{
    constructor(h,m,s){
        this.h=h;
        this.m=m;
        this.s=s;
    }
    gettime(b){
        const c=b.h*3600+b.m*60+b.s
        const d=this.h*3600+this.m*60+this.s
        var e=c+d
        var seconds=Math.floor(e%60)
        e=e/60
        var minutes=Math.floor(e%60)
        e=e/60
        var hours=Math.floor(e%60)
        e=e/60
        console.log(hours,minutes,seconds)
    }
}
a=new time(2,2,2)
b=new time(1,1,1)
a.gettime(b)