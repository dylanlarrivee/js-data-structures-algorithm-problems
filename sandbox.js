

// debugger;
// function foo(tmp){
//   function bar(){
//   var a = "123";
//   return a;
//   }
//   bar();
//   return tmp + a;
//   }
//   console.log(foo("abc"));


//   Uncaught ReferenceError: a is not defined

// $(document).ready(function(){
//   var textvalues = [];
//   $( "#product>span" ).each(function() {
//     console.log("jquery text:",$( this ).text())
//      // textvalues.push($( this ).text())
//   });

//  // $('#selected-value').val(textvalues.join(","));
// });


// $(document).ready(function(){
//   $( "#product>span" ).each(function() {
//     console.log($( this ).text())
//   });
// });


// var userData = {
//   "first_name" : "John",
//   "last_name" : "Doe",
//   "channels.email.address" : "john.doe@example.com"
//   };

//   console.log(userData["channels.email.address"])


// console.log(square(5));
// function square(num){
// return num * num;
// }


console.log(square(5));
var square = function(num){
return num * num;
}