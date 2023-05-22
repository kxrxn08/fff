const p=require('path')
// console.log(p.dirname("/Desktop/sem-iv/fsd-2/abc"))
// console.log(p.basename('/Desktop/sem-iv/fsd-2/abc'))
// console.log(p.extname("/Desktop/sem-iv/fsd-2/abc/temp.txt"))
// console.log(p.parse("/Desktop/sem-iv/fsd-2/abc/temp.txt"))

// write node js sript to check whether the extension of a file is txt or not ,if true print text document else print it's not a text document


ext=p.extname("/Desktop/sem-iv/fsd-2/abc/temp.txt")
if (ext =='.txt'){
    console.log("text document")
}
else{
    console.log("not a text document")
}