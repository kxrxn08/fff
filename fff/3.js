// write a script to define two json objects named as division 1 and 2 having an array to store name of students.These names should be sorted alphabetically in the object. Atlast both the divisions should be visible with names sorted alphabetically.
// write a js code to store an array of objects having height and name ,display the name with height with the highest value
var student={div1:{"name":["z","b","g","ge","sd","e","d","s","e","aef","egwev","egreberg","Wrg3brbh"]},
             div2:{"name":["aws","Af","AWF","afe","Sgsg","gwgs","SEgsgs",'SEgwsg',"Sfsefs"]}}
var a= student.div1.name
// console.log(a)
var b=student.div2.name
// console.log(b)
var c=a.concat(b).sort()
// console.log(c)
// var arr=student.div1.sort();
// console.log(student.div1);
// console.log(arr1)
var s=[{name:"karan","height":150},{name:"karan2","height":160},{name:"karan3","height":170}]
var max=0;
var maxN="k"
for (let x of s){
    // console.log(x)
    if (max<x.height){
        max=x.height
        maxN=x.name
    }
}
console.log(max,maxN)