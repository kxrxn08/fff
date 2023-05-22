//  write a json object which contains array of three objects.Each object contains 2 properties , name and age.
//  Sort an array values by age in descending order.Print name with age in terminal as per the sorted age. 
var student = [{"name":"karan","age":20},{"name":"karan2","age":25},{"name":"karan3","age":2}];

function a(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j].age < arr[j + 1].age) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  console.log(a(student));