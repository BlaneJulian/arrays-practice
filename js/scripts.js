$(document).ready(function(){
  $("#words").submit(function(event){
    event.preventDefault();
    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var upperCapBlank = blanks.map(function(blank){
      return $("input#" + blank).val().toUpperCase();
    });

    // upperCapBlank.sort();

    upperCapBlank.sort().forEach(function(userInput){
      $("ul#new-list").append("<li>" + userInput + "</li>");
    });


  });
});

// $(document).ready(function(){
//   $("form#words").submit(function(event){
//     event.preventDefault();
    // var blanks = ["item1", "item2", "item3", "item4", "item5"];
//     var upperCapBlanks = [];
//
//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val().toUpperCase();
//       upperCapBlanks.push(userInput);
//     });
//
//     // upperCapBlanks.sort();
//
//     upperCapBlanks.forEach(function(userInput) {
//       $("ul#new-list").append("<li>" + userInput + "</li>")
//     });
//
//   });
// });
//










// $(document).ready(function() {
//   var flavors = ["chocolate", "bourbon vanilla", "strawberry", "licorice"];
//   flavors.forEach(function(flavor) {
//     $("#list").append("<div>" + flavor + "</div>")
//   });
// });


// $(document).ready(function(){
//   var names = ["Pat", "Sheri", "Rhonda", "Henry"];
//   names.forEach(function(name) {
//     alert("Hello " + name + ", nice to see you!");
//   });
// });

// $(document).ready(function(){
//
//   var numbers = [2,3,4,5,6];
//   var total = 1;
//
//   numbers.forEach(function(number){
//       total *= number;
//   });
//   alert(total);
// });
