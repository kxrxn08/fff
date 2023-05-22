const { stringify } = require("querystring");

const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b
}
const name=()=>{
    return "hello"
}
// module.exports.add=add
// module.exports.sub=sub
// module.exports={add,sub,name}

const myDateTime=()=>{
    return Date()
}
// module.exports=myDateTime

const reverse = (num) => {
    return parseInt(num.toString().split("").reverse().join(""));
  };
  
  for (let i = 1; i <= 100; i++) {
    const reverseNum = reverse(i);
    const reverseSqr = reverse(i * i);
    if (reverseNum * reverseNum == reverseSqr) {
      console.log(i);
    }
  }
  
  module.exports = {
    reverse: reverse,
    loop: function () {
      for (let i = 1; i <= 100; i++) {
        const reverseNum = reverse(i);
        const reverseSqr = reverse(i * i);
        if (reverseNum * reverseNum === reverseSqr) {
          console.log(i);
        }
      }
    },
  };
