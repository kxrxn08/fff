const add=(a,b)=>{
        console.log(a+b);
}
a=2
b=5
setInterval(()=>{add(++a,++b)},1000)
// setTimeout(message,3000);
// function a(setTimeout(3000) => {
//     console.log("hello")
// })

// define a callback function with 2 parameters a and b which gives addition of both the numbers. Pass this callback as an argument in set interval function which will contunously display of 2 numbers with incremented values of a and b, continuously with interval of 1 second
// a=10
// b=20
// setInterval(message(10,20),1000)
// const doIt = (a, b) => {
//     console.log(a, b);
//   };
//   // setTimeout(doIt, 2000);
//   var a = 1,
//     b = 2;
//   setInterval(
//     (caller = (x = a, y = b, callbackfunc = doIt) => {
//       callbackfunc(x, y);
//       a++;
//       b++;
//     }),
//     1000
//   );
  // setInterval(caller(a, b, doIt), 1000);


  



// write a js code to display hello with increasing font size with interval of 1 second in blue color when font size reaches to 50px it should stop the process