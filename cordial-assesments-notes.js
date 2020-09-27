{
   "name": "Fred",
   "age": "20",
   "colors": ["red", "blue", "green"],
   "images": null,
   "data": {"null": {"this":"that"}, "another": {"this":"that"}}
   }
   
   productID,productName,productType,price,sale.enabled,category,inStock,url,properties.style,variants.0.sku,variants.0.qty,variants.0.attr.color,images.0,images.1,tags.0,tags.1,tags.2
   
   {
       "source": {
           "transport": "https",
           "url": "https://s3-us-west-2.amazonaws.com/content.shawscott-ts.dev/petsmart-coupon-poc/cordial-solutions-test-products-dl-2.csv"
       },
       "confirmEmail": "dylanlarrivee@gmail.com",
       "columns": ["productID", "productName", "productType", "price", "sale.enabled", "category", "inStock", "url", "properties.style", "variants.0.sku", "variants.0.qty", "variants.0.attr.color", "images.0", "images.1", "tags.0", "tags.1", "tags.2"]
   }

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


// /smarty
{$colors = ["red","yellow","green"]}
{foreach $colors as $color}
   {$color}<br />
{/foreach}