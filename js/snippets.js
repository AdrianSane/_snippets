$(document).ready(function(){// begin snippets
"use strict";
// ----------------------------------------------------------------------Sources
// https://www.tutorialspoint.com/javascript/index.htm
// https://www.tutorialspoint.com/javascript/javascript_loop_control.htm
// https://onextrapixel.com/10-useful-and-time-saving-javascript-snippets/
// https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
// https://www.codecademy.com/en/forum_questions/557d440ee39efe037e0000cc
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://appendto.com/2016/04/javascript-redirect-how-to-redirect-a-web-page-with-javascript/
// https://www.w3schools.com/js/js_errors.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// https://www.tutorialspoint.com/javascript/javascript_regexp_object.htm
// https://www.w3schools.com/js/js_debugging.asp
// https://www.w3schools.com/js/js_strict.asp - "USE STRICT";
// https://www.w3schools.com/js/js_object_prototypes.asp
// http://stackoverflow.com/questions/22978243/get-userinput-in-javascript
// https://rainsoft.io/how-to-iterate-easily-over-object-properties-in-javascript/



// ---------------------------------------------------------------------hoisting
// src: https://www.w3schools.com/js/js_hoisting.asp
// notes: declarations are hoisted to top top of the current scope,
//        initializations are not. To avoid bugs, always declare all variables
//        at the beginning of every scope.
var y; // declaration - hoisted to top
y = 7;

var z = 7; // initialization of a variable - not hoisted



// ---------------------------------------------------------------------an array
var myArray = ["item", "item2", 2, 4, 89, true];



// ---------------------------------------------------------------a matrix array
function matrix(){
  var matrix_A = [ [], [], [], [] ];

  for(var i = 0; i < 4; i++){

    for(var j = 0; j < 4; j++){
      matrix_A[i][j] = i * j;
    };

  };
  console.log(matrix_A);
}
matrix();



// --------------------------------------------------------------------an object
var myObject = {"item" : 28, "item2" : 12, "item3" : true};



// -----------------------------------------------------------a function literal
var myFunc = function(param, param2){
  // function stuff
};
myFunc(/*arg, arg2*/);





// ---------------------------------------------------------a function statement
function myOtherFunc(param, param2){
  // function stuff here
};




// ------------------------------------------------------------an arrow function
// src: https://www.youtube.com/watch?v=22fyYvxz-do&list=PLQe7hfWfchpp2xqDMydROU4apdv2d9qjb&index=8&t=45s
// notes: parenthesis are optional when theres only one parameter. if you need a function
//        with no parameters, it requires parenthesis. Arrow functions work well
//        with higher order functions such as map, filter and reduce, that take other functions
//        as arguments for processing collections of data. An arrow function does not
//        create its own "this" context. When you want to return an object using an arrow
//        function, you have to put the object in parenthesis.

//syntax
(param1, param2) => {statements}
(param1, param2) => expression
(param1, param2) => {return expression;}

(singleParam) => {statements}
singleParam => {statements}

() => {statements}
() => expression
() => {return expression}

(param1, param2, paramN) => expression

// a normal function
var multiply = function(x, y){
  return x * y;
};

// as an arrow function
var multiplyAgain = (x,y) => {return x * y};

// or

var multiplyYetAgain = (x,y) => x * y;


//example using higher order function map
var material = [
  "Adamantium",
  "Boron",
  "Tritanium",
  "Unobtanium"
];

// map, using a standard function
var materials1 = materials.map(function(material){
  return material.length;
});

// map, using an arrow function
var materials2 = materials.map((material) => {
  return material.length;
});

// map using an even shorter arrow function
var materials3 = materials.map(material => material.length);

// no binding of "this" in an arrow function
function person(){
  //this referes to the global object
  this.age = 0;

  // an arrow function in the setInterval method
  setInterval(() => {
    //this refers to the person object (the parent object)
    this.age++;
  }, 1000);
}
 var p = new person();

 //returning object literals in an arrow function
 var func = () => ({foo:1});


// --------------------------------------------a closure (inner/nested function)
// notes: Inner functions (closures) store their outer function’s variables by
//        reference, not by value. a closure is any function that keeps
//        reference to variables from its parent’s scope even after the parent
//         has returned.
function globalFunction(param){
  var randomVar = " randomVar called in closure ";

  function closureFunction(){
    console.log("using a variable in its parent function" +randomVar + param);
  };

  closureFunction();
};
globalFunction(" global function call ");



// ------------------------------------------------------a conditional statement
if("condition1"){
  // do this
}else if("condition2"){
  // do this
}else{
  // or do this
};

// --------------------------------------------------------a ternary conditional
var theAnswer = Math.PI > 4 ? "yep" : "nope";



// ----------------------------------------------------------------a switch case
switch("condition"){
  case("condition"):
    // do stuff
    break;
  case("condition"):
    // do more stuff
    break;
  default:
    // set default stuff
    break;
};



// -----------------------------------------------------------------a while loop
var text = "",
    i = 0;
while(i < 5){
  text += "The number is: " + i + " ";
  i++;
  console.log(text);
};



// --------------------------------------------------------------a do while loop
var droga = 5,
    notDroga = 20;

do{
  console.log("droga droga5");
  droga++;
}while(droga < notDroga);



// -------------------------------------------------------------------a for loop
// notes: Avoid using a for-in loop for arrays, better to use .length
var cars = ["ford", "dodge", "chevy", "honda"];
for(i = 0; i < length.cars; i++){
  // do stuff if true
};



// ----------------------------------------------------------------a for in loop
var person = {fname:"john", lname:"doe", age:25},
    txt = "",
    x;

for(x in person){
  txt += person[x];
  console.log(txt);
};



// -----------------------------------------------------------------loop control
// src: https://www.tutorialspoint.com/javascript/javascript_loop_control.htm
var a = 1;
console.log("starting loop");
while(a < 20){// loop to 20
  if(a == 10){ // when the loop reaches 10
    break;
  };
  a = a + 1;
  console.log(a);
};
console.log("loop done");



// --------------------------------------------------try catch throw validations
// src: https://www.w3schools.com/js/js_errors.asp
// src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// notes: try - allows you to define a block of code to be tested for errors while it is being executed.
//        catch - allows you to define a block of code to be executed, if an error occurs in the try block.
//        throw - allows you to create a custom error.
//        finally - lets you execute code, after try and catch, regardless of the result.
//        If you use throw together with try and catch, you can control program flow and generate custom error messages.
try{
  // block of code to try
  throw "all exceptions";
}catch(err){
  // block of code to handle errors
  console.log(err);
}finally{
  // block of code to be executed regardless of the try / catch result
}



// ---------------------------------------a standard object constructor function
// ------------creates an object prototype
// src: https://www.w3schools.com/js/js_object_prototypes.asp
// notes: The standard way to create an object prototype is to use an object
//        onstructor function. With a constructor function, you can use the new
//        keyword to create new objects from the same prototype. The constructor
//        function is the prototype for Person objects. It is considered good
//        practice to name constructor function with an upper-case first letter
function Person(first, last, age, eyecolor){
  this.firstName = first;
  this.lastname = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myMother = new Person("Iluminada", "Barber", 56, "brown"),
    myFather = new Person("Bennigno", "Velazquez", 53, "brown");
console.log(myMother);



// -------------------------------------------------------properties and methods
// src: https://www.w3schools.com/js/js_object_prototypes.asp
// notes:




// --------------------------------check to see if an external script has loaded
function loaded(){
  var a = window.angular,
      b = window.TweenMax,
      c = window.$,
      d = window.handlebars;

  if(a){
    console.log("angular loaded");
  };
  if(b){
    console.log("gsap loaded");
  };
  if(c){
    console.log("jquery loaded");
  };
  if(d){
    console.log("handlebars loaded");
  };

};
loaded();



// ------------------------------using a conditional in a function as a variable
var x = function(a, b){
  if(a < 100){
    console.log("first");
  }else if(b > 100){
    console.log("second");
  }else{
    console.log("third");
  }
}
x(Math.random()*100, 2000);



// -----------------------------------------return a random number from 0 to 100
function randomNum(){
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("random").innerHTML = randomNumber;
  console.log("get a random number from 0 to 100: " + randomNumber);
}
randomNum();



// ---------------------------------------------------------------------get json
// dependancy: jquery, ajax, json
$("#get-data").click(function(){
  var showData = $('#show-data');

  $.getJSON("js/data.json", function(data){
    //console.log(data);
  });

  showData.text("JSON Data Loading");
});



// ---------------------------------------------------------------------get json
// dependancy: jquery, ajax, json
var url = "js/data-3.json";
$.getJSON(url, function(data, status){

  //console.log(data);

  // test to see if the status of the request was fulfilled
  if(status === 200){
    // do stuff with data
    console.log("status: " + status);
  }else{
    // do this stuff with data
  };
});



// -------------------------------------------------------------------------ajax
// dependancy: jquery, ajax, json
$.ajax({
  type : "GET", // the request to the server
  url : "js/data-2.json", // the path to the json file
  //data : data,
  async : true,
  dataType : "json", // the type of data being retireved
  success : function(data){ // the function that does something with the data
    // do stuff with json data
    //console.log(data);
  }
});



// -------------------------------------------a clicktag that pushes to an array
// dependancy: jquery
$(".click").on({
  click : function(){
    var clickTag = "https://www.google.com/",
        list = [];
    window.open(clickTag);
    document.getElementById("clickOut").innerHTML = clickTag;
    list.push(clickTag);
    console.log(list);
  }
});



// -------------------------------------------find the area based on users input
// dependancy: jquery
$("#calculate").click(
  function(){
    var width = document.getElementById("width").value,
        height = document.getElementById("height").value,
        calc = width * height;
    document.getElementById("output").innerHTML = calc;
    return calc;
  });



// ----------------------------------------------return odd numbers from 1 to 10
for(i=1; i<10; i+=2){
  console.log(i);
};

// or

for(i=0; i<10; i++){
  if(i % 2){
    console.log(i);
  };
};



// -------------------------------------------------------------display the date
function showDate() {
  var now = new Date(),
      days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      date = now.getDate(),
      year = now.getFullYear();
      document.getElementById("date").innerHTML = days[now.getDay()] + ", " + months[now.getMonth()] + " " + date + " " + year;
};
showDate();



// ---------------------------------------------------------------preload images
var images = [];

function preloadImages(){
  for(i=0; i < preloadImages.arguments.length; i++){
    images[i] = new Image();
    images[i].src = preloadImages.arguments[i];
  };
};
//preloadImages("../../img/lasagna.png", "../../img/tomatoes.png", "../../img/lettuce.png");
console.log(images);



// ----------------------------------------------------------count button clicks
// src: https://onextrapixel.com/10-useful-and-time-saving-javascript-snippets/
// dependancy: jquery
$("#clicks")
  .data("counter", 0)
  .click(function(){
    var counter = $(this).data("counter"); //get
    $(this).data("counter", counter + 1); //set
    console.log("Clicked " + counter + " times.");
  });



// ---------------------------------Maximum width or height in a set of elements
// src: https://onextrapixel.com/10-useful-and-time-saving-javascript-snippets/
// dependancy: jquery, css
var getMaxHeight = function($txt){
  var maxHeight = 0;
  $txt.each(function(){
    // in some cases, you may want to use outerHeight() instead
    var height = $(this).height();
    if(height > maxHeight){
      maxHeight = height;
    };
  });
  return maxHeight;
};



// ----------------------------------------------Get a random item from an array
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119],
    randomItem = items[Math.floor(Math.random() * items.length)];
    console.log(randomItem);



// ----------------------Generate an array of numbers with numbers from 0 to max
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
var numbersArray = [],
    max = 15;
for(var i=1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100]
console.log(numbersArray);



// --------------------------------Get the max or the min in an array of numbers
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411],
    maxInNumbers = Math.max.apply(Math, numbers),
    minInNumbers = Math.min.apply(Math, numbers);
console.log(maxInNumbers);
console.log(minInNumbers);



// -----------------------------------------------------Empty and clear an array
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
var myArray = [12 , 222 , 1000, "stuff", true, false];
myArray.length = 0; // myArray will be equal to [].



// ---------------------------------------------------delete items from an array
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
// notes: items will be equal to [12, "a", 5478, "foo", 8852, "Doe", 2154, 119],
//        Use splice instead of using delete to delete an item from an array.
//        Using delete replaces the item with undefined instead of the removing
//        it from the array.
var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, 'Doe' ,2154 , 119 ];
items.length; // return 11
items.splice(3,1) ;
items.length; // return 10



// ---------------------------------------------Append an array to another array
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
// notes: array1 will be equal to  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100]
var array1 = [12, "foo", {name : "Joe"}, -2458],
    array2 = ["Doe", 555, 100],
    newArray = Array.prototype.push.apply(array1, array2);
console.log(newArray);



// -------------------------------------------Use logical AND/ OR for conditions
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
// notes: The logical OR could also be used to set a default value for function argument.
var foo = 10;
    foo == 10 && doSomething(); // is the same thing as if (foo == 10) doSomething();
    foo == 5 || doSomething(); // is the same thing as if (foo != 5) doSomething();

function doSomething(arg1){
    arg1 = arg1 || 10; // arg1 will have 10 as a default value if it’s not already set
};



// ----------------------------------------------Get prime numbers from 0 to 100
// src: mike hejja
// notes: A prime number is a whole number greater than 1, whose only two
//        whole-number factors are 1 and itself. The first few prime numbers are
//        2, 3, 5, 7, 11, 13, 17, 19, 23, and 29. A prime number (or a prime) is
//        a natural number greater than 1 that has no positive divisors other
//        than 1 and itself. A natural number greater than 1 that is not a prime
//        number is called a composite number.
for(var counter = 0; counter <= 100; counter++){
    var notPrime = false;

    for(i = 2; i <= counter; i++){
      if(counter % i === 0 && i !== counter){
        notPrime = true;
      };
    };

    if(notPrime === false){
      console.log(counter);
    };
};



// -------------------------------Check to see if a random number is odd or even
// src: https://www.codecademy.com/en/forum_questions/557d440ee39efe037e0000cc
// src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// notes: number % 2 == 0 is a valid boolean expression that checks whether
//        number % 2 is equivalent to 0. For even numbers, the result is the
//        value, True. (%) returns the division remainder.

// get a whole, random number between 0 and 1000
function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// check to see if the number is odd or even
function checkNumbers(){
  var i = getNumber(0, 1000);

  // ternary logic
  i % 2 == 0 ? (console.log(i + ": even number " + i / 2)) : (console.log(i + ": odd number " + i / 2));

  /*
  // conditional logic
  if(i % 2 == 0){// checks to see if the number is even
    console.log(i + ": even number " + i / 2);
  }else if(i % 2){// checks to see if the number is odd
    console.log(i + ": odd number " + i / 2);
  };
  */
};
checkNumbers();



// ------------------------------------------------------A self calling function
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
// notes: A Self-Invoked Anonymous Function
(function(){
  // some private code that will be executed automatically
})();

// Example:
(function(a, b){
  var result = a+b;
  //return result;
  console.log(result + " Self starting function");
})(10, 20);



// -----------------------------Dealing with numeric ranges or ranges of numbers
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
// notes: Use a switch/case statement instead of a series of if/else, Using
//        switch/case is faster when there are more than 2 cases, and it is more
//        elegant (better organized code). Avoid using it when you have more
//        than 10 cases. Using a switch/case statement with numeric ranges is
//        possible with this trick.

function getCategory(age){
  var category = "";

  switch(true){
    case isNaN(age):
      category = "not an age";
      break;
    case(age >= 50):
      category = "mature";
      break;
    case(age >= 20):
    case(age <= 30):
      category = "young";
      break;
    case(age >= 10):
    case(age <= 20):
      category = "teen";
      break;
    case(age <= 10):
      category = "child";
      break;
    default:
      category = "young";
      break;
  };

  return category;

};
var ageCategory = getCategory(38);
console.log(ageCategory);



// -------------------Check the properties of an object when using a for-in loop
// src: https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
// notes: This code snippet could be useful in order to avoid iterating through
//        the properties from the object’s prototype.
var object1 = {"name" : "adrian sane"};

for (var item in object1){
  if(object1.hasOwnProperty(name)){
    // do something with name
  };
};
console.log(object1);



// ----------------------------------------redirect to a different page on click
// src: https://appendto.com/2016/04/javascript-redirect-how-to-redirect-a-web-page-with-javascript/
document.getElementById("btn").onclick = function(){
  window.location = "https://www.google.com/";
  document.getElementById("message").innerHTML = "You will be redirected in 10 seconds";
};



// ------------------------------------auto redirect after a certain time period
// src: https://appendto.com/2016/04/javascript-redirect-how-to-redirect-a-web-page-with-javascript/
// notes: If you pass a string into setTimeout() or setInterval(), the string
//        will be evaluated the same way as with eval, which is slow.
window.setTimeout(function(){
  //window.location = "https://www.facebook.com/";
},3000);

// setInterval(funcNameHere, 1000);
// setTimeout(funcNameHere, 5000);


// ---------------------------------------------------------------Redirect types
function jsRedirects(){

// Sets the new location of the current window.
var first = window.location = "http://www.example.com";

// Sets the new href (URL) for the current window.
var second = window.location.href = "http://www.example.com";

// Assigns a new URL to the current window.
var third = window.location.assign("http://www.example.com");

// Replaces the location of the current window with the new one.
var fourth = window.location.replace("http://www.example.com");

// Sets the location of the current window itself.
var fifth = self.location = "http://www.example.com";

// Sets the location of the topmost window of the current window.
var sixth = top.location = "http://www.example.com";
};



// -----------------------------------------open a popup window using javascript
// src: https://dzone.com/articles/how-open-window-using
function openWindow(){
  window.open ("http://www.riotmind.nyc","mywindow");
};



// ----------------------------------------------check when a browser has closed
// src: https://webdesignledger.com/javascript-code-snippets/
// notes: If your users are going to click the close button you may want to be
//        notified in advance. Some more annoying websites will really push this
//        functionality for their own marketing needs. Generating popup ads or
//        alert boxes to keep the user stuck on their page a little longer – not
//        the best way to go about it. But there are other more useful features
//        you can do this with detection. As an example you may want to clear
//        out a user’s cookie session immediately before closing the window.
//        This could be for your own security reasons, and to stop anyone else
//        from accessing a different user’s account by mistake.
function checkBrowser(){
  // triggers on clicking the close button, Alt+F4, File->close
  if(window.event.clientX < 0 && window.event.clientY < 0){
    window.open("snippets.html", "left=12000, top=1200, width=120, height=50");
    console.log("Browser Window Closed");
  };
};



// -----------------------------------------------------dom compatibility object
// src: https://www.tutorialspoint.com/javascript/javascript_html_dom.htm
// notes: use either W3C DOM or IE 4 DOM depending on their availability. Checks
//        for the existence of a method or property to determine whether the
//        browser has the capability you desire.
if(document.getElementById){
  // if the W3C method exists, do code stuff here
  console.log("W3C methods capable");
}else if(document.all){
  // if the all[] array exists, use it
}else{
  // otherwise, use the legacy dom
  console.log("IE4 DOM capable");
};



// -------------------------------------------------------user browser detection
// src: https://www.tutorialspoint.com/javascript/javascript_browsers_handling.htm
// src: https://www.whatismybrowser.com/detect/what-is-my-user-agent
// notes: userAgent property returns the value of the user-agent header sent by
//        the browser to the server. The value returned, contains information
//        about the name, version and platform of the browser.
var userAgent = navigator.userAgent,
    opera = (userAgent.indexOf("Opera") != -1),
    ie = (userAgent.indexOf("MSIE") != -1),
    gecko = (userAgent.indexOf("Gecko") != -1),
    netscape = (userAgent.indexOf("Mozilla") != -1),
    version = navigator.appVersion;

    if(opera){
      console.log("OPERA based browser");
    }else if(ie){
      console.log("IE based browser");
    }else if(gecko){
      console.log("GECKO based browser");
    }else if(netscape){
      console.log("NETSCAPE based browser");
    }else{
      console.log("Unknown browser");
    };

console.log(version);



// -------------------------------------------------------more browser detection
// src: https://webdesignledger.com/javascript-code-snippets/

function detect(){
  // internet explorer
  var ie = document.all != null, //ie4 and above
      ie5 = document.getElementById && document.all,
      ie6 = document.getElementById && document.all && (navigator.appVersion.indexOf("MSIE>=0"));
  console.log(ie);
  console.log(ie5);
  console.log(ie6);

  if(ie || ie5 || ie6){
    console.log("Internet Explorer Used")
  }else{
    console.log("Internet Explorer not used");
  };

  // netscape
  var ns4 = document.layers != null,
      ns6 = document.getElementById && !document.all,
      ns = ns4 || ns6;
  console.log(ns4);
  console.log(ns6);
  console.log(ns);

  if(ns4 || ns6 || ns){
    console.log("Netscape is Used")
  }else{
    console.log("Netscape is not used");
  };

  // firefox
  var ff = !document.layers && !document.all;

  console.log(ff);

  if(ff){
    console.log("Firefox is used");
  }else{
    console.log("Firefox is not used");
  };

  // opera
  var op = navigator.userAgent.indexOf("opera") > 0,
      op7 = op && operaVersion() <= 7,
      op8 = op && operaVersion() >= 8;
  console.log(op);
  console.log(op7);
  console.log(op8);

  if(op || op7 || op8){
    console.log("Opera is used");
  }else{
    console.log("Opera is not used");
  };

  // detect opera version
  function operaVersion(){
    var agent = navigator.userAgent,
        idx = agent.indexOf("opera");

    if(idx > 1){
      return parseInt(agent.subString(idx + 6, idx + 7));
    };

    console.log(idx);
  };
  operaVersion();

};
detect();



/* -----------------------------------------------------------------------------
Browser detection and applying classes to html based on operating system and browser
----------------------------------------------------------------------------- */
// src: https://css-tricks.com/snippets/jquery/browser-detetction/
// src: http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/
// dependancy: jquery, JQBrowser

// --------------------------------------------------------------------JQBrowser
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(c/a))+String.fromCharCode(c%a+161)};while(c--){if(k[c]){p=p.replace(new RegExp(e(c),'g'),k[c])}}return p}('Ö ¡(){® Ø={\'¥\':¡(){¢ £.¥},\'©\':{\'±\':¡(){¢ £.©.±},\'¯\':¡(){¢ £.©.¯}},\'¬\':¡(){¢ £.¬},\'¶\':¡(){¢ £.¶},\'º\':¡(){¢ £.º},\'Á\':¡(){¢ £.Á},\'À\':¡(){¢ £.À},\'½\':¡(){¢ £.½},\'¾\':¡(){¢ £.¾},\'¼\':¡(){¢ £.¼},\'·\':¡(){¢ £.·},\'Â\':¡(){¢ £.Â},\'³\':¡(){¢ £.³},\'Ä\':¡(){¢ £.Ä},\'Ã\':¡(){¢ £.Ã},\'Å\':¡(){¢ £.Å},\'¸\':¡(){¢ £.¸}};$.¥=Ø;® £={\'¥\':\'¿\',\'©\':{\'±\':²,\'¯\':\'¿\'},\'¬\':\'¿\',\'¶\':§,\'º\':§,\'Á\':§,\'À\':§,\'½\':§,\'¾\':§,\'¼\':§,\'·\':§,\'Â\':§,\'³\':§,\'Ä\':§,\'Ã\':§,\'Å\':§,\'¸\':§};Î(® i=0,«=».ì,°=».í,¦=[{\'¤\':\'Ý\',\'¥\':¡(){¢/Ù/.¨(°)}},{\'¤\':\'Ú\',\'¥\':¡(){¢ Û.³!=²}},{\'¤\':\'È\',\'¥\':¡(){¢/È/.¨(°)}},{\'¤\':\'Ü\',\'¥\':¡(){¢/Þ/.¨(°)}},{\'ª\':\'¶\',\'¤\':\'ß Ñ\',\'¥\':¡(){¢/à á â/.¨(«)},\'©\':¡(){¢ «.¹(/ã(\\d+(?:\\.\\d+)+)/)}},{\'¤\':\'Ì\',\'¥\':¡(){¢/Ì/.¨(«)}},{\'¤\':\'Í\',\'¥\':¡(){¢/Í/.¨(°)}},{\'¤\':\'Ï\',\'¥\':¡(){¢/Ï/.¨(«)}},{\'¤\':\'Ð\',\'¥\':¡(){¢/Ð/.¨(«)}},{\'ª\':\'·\',\'¤\':\'å Ñ\',\'¥\':¡(){¢/Ò/.¨(«)},\'©\':¡(){¢ «.¹(/Ò (\\d+(?:\\.\\d+)+(?:b\\d*)?)/)}},{\'¤\':\'Ó\',\'¥\':¡(){¢/æ|Ó/.¨(«)},\'©\':¡(){¢ «.¹(/è:(\\d+(?:\\.\\d+)+)/)}}];i<¦.Ë;i++){µ(¦[i].¥()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¥=¦[i].¤;® ­;µ(¦[i].©!=²&&(­=¦[i].©())){£.©.¯=­[1];£.©.±=Ê(­[1])}ê{® Ç=Ö ë(¦[i].¤+\'(?:\\\\s|\\\\/)(\\\\d+(?:\\\\.\\\\d+)+(?:(?:a|b)\\\\d*)?)\');­=«.¹(Ç);µ(­!=²){£.©.¯=­[1];£.©.±=Ê(­[1])}}×}};Î(® i=0,´=».ä,¦=[{\'ª\':\'¸\',\'¤\':\'ç\',\'¬\':¡(){¢/é/.¨(´)}},{\'¤\':\'Ô\',\'¬\':¡(){¢/Ô/.¨(´)}},{\'¤\':\'Æ\',\'¬\':¡(){¢/Æ/.¨(´)}}];i<¦.Ë;i++){µ(¦[i].¬()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¬=¦[i].¤;×}}}();',77,77,'function|return|Private|name|browser|data|false|test|version|identifier|ua|OS|result|var|string|ve|number|undefined|opera|pl|if|aol|msie|win|match|camino|navigator|mozilla|icab|konqueror|Unknown|flock|firefox|netscape|linux|safari|mac|Linux|re|iCab|true|parseFloat|length|Flock|Camino|for|Firefox|Netscape|Explorer|MSIE|Mozilla|Mac|toLowerCase|new|break|Public|Apple|Opera|window|Konqueror|Safari|KDE|AOL|America|Online|Browser|rev|platform|Internet|Gecko|Windows|rv|Win|else|RegExp|userAgent|vendor'.split('|')))
// --------------------------------------------------------------------JQBrowser

// define browsers
var aol = $.browser.aol(), // AOL Explorer
    camino = $.browser.camino(), // Camino
    firefox = $.browser.firefox(), // FireFox
    flock = $.browser.flock(), // Flock
    icab = $.browser.icab(), // iCab
    konqueror = $.browser.konqueror(), // Konqueror
    mozilla = $.browser.mozilla(), // Mozilla
    msie = $.browser.msie(), // Internet Explorer Win / Mac
    netscape = $.browser.netscape(), // Netscape
    opera = $.browser.opera(), // Opera
    safari = $.browser.safari(), // Safari
    userbrowser = $.browser.browser(); // Detected users browser

// define operating systems
var linux = $.browser.linux(), // Linux os
    mac = $.browser.mac(), // Mac os
    win = $.browser.win(); // Microsoft Windows os

// get users os Version
var userversion = $.browser.version.number();

// check operating systems
if(mac == true){
	// $("html").addClass("mac");
  console.log("mac: " + mac);
}else if(linux == true){
	// $("html").addClass("linux");
  console.log("linux: " + linux);
}else if(win == true){
	// $("html").addClass("windows");
  console.log("win: " + win);
}

// get users browser
if (userbrowser == "Safari") {

	// $("html").addClass("safari");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Firefox") {

	// $("html").addClass("firefox");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Camino") {

	// $("html").addClass("camino");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "AOL Explorer") {

	// $("html").addClass("aol");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Flock") {

	// $("html").addClass("flock");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "iCab") {

	// $("html").addClass("icab");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Konqueror") {

	// $("html").addClass("konqueror");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Mozilla") {

	// $("html").addClass("mozilla");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Netscape") {

	// $("html").addClass("netscape");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Opera") {

	// $("html").addClass("opera");
  console.log("User Browser Info: " + userbrowser);

} else if (userbrowser == "Internet Explorer") {

	// $("html").addClass("ie");
  console.log("User Browser Info: " + userbrowser);

} else {}

$("html").addClass("" + userversion + "");
console.log("User Version: " + userversion);



// -----------------------------------------------------user browser information
// src: https://www.w3schools.com/jsref/prop_nav_useragent.asp
var userBrowserInfo = "";
    userBrowserInfo += "Browser CodeName: " + navigator.appCodeName + " ";
    userBrowserInfo += "Browser Name: " + navigator.appName + " ";
    userBrowserInfo += "Browser Version: " + navigator.appVersion + " ";
    userBrowserInfo += "Cookies Enabled: " + navigator.cookieEnabled + " ";
    userBrowserInfo += "Browser Language: " + navigator.language + " ";
    userBrowserInfo += "Browser Online: " + navigator.onLine + " ";
    userBrowserInfo += "Platform: " + navigator.platform + " ";
    userBrowserInfo += "User-agent header: " + navigator.userAgent + " ";
console.log("User Browser Info: " + userBrowserInfo);



// --------return random info from an array using getter and setter in a closure
function cityLocation(){
  var city = [
    "newyork",
    "boston",
    "chicago",
    "los angeles",
    "miami",
    "dallas",
    "denver",
    "tallahassee",
    "hollywood",
    "berlin",
    "london",
    "paris",
    "rome",
    "dehli",
    "moscow"
  ];

  return{
    get: function(){// obtains the current value of "city"
      console.log(city[Math.floor(Math.random() * city.length)]);
    },
    // set a new city if needed
    set: function(newCity){// updates the current value of "city"
      city = newCity
    }
  };
};

var myLocation = cityLocation();

myLocation.get();
//myLocation.set("guyana");
//myLocation.get();



// --------------------------------------get users input and push it to an array
// src: http://stackoverflow.com/questions/22978243/get-userinput-in-javascript
// src: http://stackoverflow.com/questions/9951500/javascriptstoring-values-in-array
document.getElementById("userData").onclick = function(){
  var data = [],
        a = 1,
      text = document.getElementById("userInput").value;

        for(i = 0; i < data.length; i++){
          data[i] = a;
          a++;
        }

      data.push(text);
      console.log(data);
};



// ------------------------------------------------------calculate a persons age
// src: https://www.w3schools.com/html/html_form_input_types.asp
document.getElementById("yearSubmit").onclick = function(){
  var now = new Date(),
      thisYear = now.getFullYear(),
      userYear = document.getElementById("userYear").value,
      age = thisYear - userYear;

  document.getElementById("ageOutput").innerHTML = "you are: " + age + " years old";
};



// ---------------------------------------------calculate the area of a triangle
function triArea(w, h){
  var area = w * h / 2;
  console.log(area);
};
triArea(5, 10);



// --------------------------------------------find averages of a set of numbers
// notes: The average is the sum of all items divided by the number of items.
//        Remember the order of operations. (PEMDAS)
function averages(){
  var scores = {
        "a": 70,
        "b": 90,
        "c": 85,
        "d": 65,
        "e": 95,
        "f": 80
      },
      average = Math.floor(
        (scores.a +
        scores.b +
        scores.c +
        scores.d +
        scores.e +
        scores.f) / 6
      );
  console.log("Youre average is: " + average);
}
averages();



// ---------------------------------------------------------------------fizzBuzz
function fizzBuzz(){
  var fizz = "fizz",
      buzz = "buzz";

  for(i=0; i<=20; i++){
    if(i % 2 == 0){
      console.log(fizz);
    }else{
      console.log(buzz);
    }
  };

};
fizzBuzz();



// -----------------------------------------access global variables in a browser
// src: https://code.tutsplus.com/tutorials/the-essentials-of-writing-high-quality-javascript--net-15145
// notes: it’s important to be a good neighbor to the other scripts that may be
//        in the same page and use as few global variables as possible. Any
//        variable you don’t declare becomes a property of the global object.
var global = "hello";
console.log(global);
console.log(window.global);
console.log(window["global"]);
console.log(this.global);



// -------------------------access / pull user option values from forms and menu
// src: https://webdesignledger.com/javascript-code-snippets/
function selected(){
  var e = document.getElementById("menu"),
      optValue = e.options[e.selectedIndex].value,
      optText = e.options[e.selectedIndex].text;

  console.log(e);
  console.log(optValue); // the option value attribute
  console.log(optText); // internal text inside option element
};
selected();



// ------------------------------------------------Add and remove class on hover
// src: https://css-tricks.com/snippets/jquery/addingremoving-class-on-hover/
// dependancy: jquery, css
$("#elm").hover(
  function(){
    $(this).addClass("hover");
  },
  function(){
    $(this).removeClass("hover");
  }
);



// ----------------------------------------------------Broken img link handeling
// src: https://css-tricks.com/snippets/jquery/better-broken-image-handling/
// dependancy: jquery
function imgReplace(){
  // replace missing images
  $("img").error(function(){
    $(this).attr("src", "missing.png");
  });

  // hide missing images
  $("img").error(function(){
    $(this).hide();
  });
};



// ----------------------------------------------------------CTA Event Handelers
// dependancy: jquery, greensock
// cta handlers
    function doCtaOver() {
      // stuff to do when listeners are triggered
      //TweenLite.to(banner.ctaInner, 0.2, {autoAlpha:1, ease: Circ.easeOut, tranformOrigin: "center center", z:0.1, rotationZ:0.01});
    };

    function doCtaOut() {
      // stuff to do when listeners are triggered
      //TweenLite.to(banner.ctaInner, 0.2, {autoAlpha:0, ease: Circ.easeOut, tranformOrigin: "center center", z:0.1, rotationZ:0.01});
    };

    // cta event listeners
    // event listeners listening for mouse events on an element, calling the event handlers
          //$("#elm").addEventListener('mouseover', doCtaOver);
          //$("#elm").addEventListener('mouseout', doCtaOut);



// ----------------------------------------grab dom elements using js and jquery
// dependancy: jquery
// dom elements using a namespace

var riot = {
  win : $("window"),
  html : $("html"),
  body : $("body"),
  header : $("header"),
  nav : $("nav")
}

console.log(riot);
console.log(riot.body);
console.log(riot.header);
console.log(riot.nav);
console.log(riot.html);
console.log(riot.win);





// ---------------------------------------error handeling with try, catch, throw
// src: https://www.youtube.com/watch?v=cFTFtuEQ-10&list=PLQe7hfWfchpp2xqDMydROU4apdv2d9qjb&index=7
// notes: error handeling is used most when dealing with data from other Sources
//        like user input. It's common to see error handeling when dealing with
//        ajax calls or asynchro nous code. Once an error is reached in the try
//        statement, it will go straight to the catch statement and skip all
//        of the remaining code in the try statement. In order for a try catch
//        to work, the code must be runnable. Try Catch only handles runtime
//        errors. You can create custom errors with the throw statement.

// try: lets you test a block of code for errors
// catch: lets you handle the errors
// throw: lets you create custom errors including numbers or strings or booleans
// finally: lets you execute code after try and catch regardless of the result

// try some code
try{

  console.log("start of try runs");

  unicycle; // will cause an error

  console.log("end of try runs -- never reached");

} catch(err){ // pass in an err object to the catch statement

  console.log("error has occured: " + err);

} finally{

  console.log("this code is alway run");
}


// error handeling example with data from a server
let json = "{'age' : 30}";

try{
  let user = JSON.parse(json);

  if(!user.name){// if there is no user.name
    // throw a new syntax error
    throw new syntaxError("Incomplete data: no name");
  }

  console.log(user.name);

} catch(e){

  console.log("JSON error: " + e.message);

};





// -------------------------------------------iterating through items in an arry
// src: https://www.youtube.com/watch?v=Urwzk6ILvPQ&t=317s&index=8&list=PLQe7hfWfchpp2xqDMydROU4apdv2d9qjb
// Note: go through each item in an array and do something with those items



// for each
// do something for each item in the array
var array1 = [1,2,3];

array1.forEach(function(item, index){
  console.log(item, index);
});



// map
// do something with an array item, then replace it with something new
const array2 = [1,2,3];

const doubled = array2.map(function(item){
  return item * 2;
});
consle.log(doubled);



// filter
// checks each item in an array against a condition to see if its true or false,
// if true, it will put the item back in the array, if its false, it will omit it.
// each true value will be returned in an array
const array3 = [1,2,3];
const evens = array3.filter(function(item){
  return item % 2 === 0;
});
console.log(evens);



// reduce
// do something with the items in an array then pass the results to the next iteration
// along with the next item in the array. the number at the end of the method is what
// the initial result is going to be. if no initial result is given, the result will
// default to the first item in the array.
const array4 = [1,2,3].reduce(function(result, item){
  return result + item;
}, 0);
console.log(array4);



// some
// checks to see if any item in an array meet the methods condition and returns a boolean
const negative = [1,2,3,-1,-4,-90,11,78,4,-2].some(function(item){
  return item < 0;
});
console.log(negative);



// every
// checks to see if ALL items meet the methods condition and returns a boolean
const positive = [2,4,6,8,10].every(function(item){
  return > 0;
});
console.log(positive);



// find
// goes through all array items and checks it against a condition, if true, it will
// return that item. will return undefined if false.
const arrayOfObj = [ {id: "a"}, {id: "b"}, {id: "c"} ];
const found = arrayOfObj.find(function(item){
  return item.id === "b";
});
console.log(found);



// find index
// will return the index of the item instead of the item when hecked against a condition.
// if the targeted index is not found, it will return a negative
const arrayOfObj2 = [ {id: "a"}, {id: "b"}, {id: "c"} ];
const foundIndex = arrayOfObj2.findIndex(function(item){
  return item.id === "c";
});
console.log(foundIndex);





// -----------------------------------------------iterate over object properties
// src: https://rainsoft.io/how-to-iterate-easily-over-object-properties-in-javascript/






});// end snippets
