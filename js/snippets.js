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
    }

    console.log(idx);
  };
  operaVersion();





}
detect();


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
  console.log(userBrowserInfo);



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
//        Remember the order of operations. PEMDAS
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

});// end snippets
