let r=10
console.log(r);


var age = 10;

if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

// nested loop
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

//styling console output using CSS with a %c format specifier
var cubes = 'ABCDEFG';
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

/// for loop 
for (let i = 1; i <= 10; i++) {
    if (i === 1) {
      console.log("Gold medal");
    } else if (i === 2) {
      console.log("Silver medal");
    } else if (i === 3) {
      console.log("Bronze medal");
    } else {
      console.log(i);
    }
  }


// functions

let arr=['a','b','c','d']
loop(arr)
function loop(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}

//objcts
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
table.age=3;

console.log(table)
console.log(table.legs)



///arr vs object
// dot vs bracket notaiton
var arr1 = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arr1.length; i++) {
    console.log(drone[arr1[i]]) //possible
   
    let aa=arr1[i]
    console.log(drone.aa) //not possible
}


///function with arr with obj
let one=1
let two=2
let three=3
console.log("array values :",arrayBuilder(one, two, three));

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

//strings

let ss="Wo".concat("rl").concat("d"); // 'World'
console.log(ss)

"ho-ho-ho".indexOf('-'); // 2
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
let greet= 'haLLow'
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "


//math
Math.pow(2,3)
Math.cbrt(8)
Math.max(9,8,7)

///function in object

var car = {};

car.color = "red";

car.turnOn = function() {
    console.log('engine running')
}

console.log(car); 
car.turnOn() //called the function


//try catch
try {
    console.log(c+d);
} catch (er) {
 //   console.log(er);    //refrence error :c is not defined
}
console.log('program not stop because of error');

//num to binary
let num= (5).toString(2); // '1010'
console.log("5 in binary= ",num);

let null1;
console.log('defalut : ',null1)  //browser console log = prints undiefine because it returnig no null

///error hanldiling

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}

letterFinder([],[])
letterFinder("cat","c")


///
//creating an object

var virtualPet = 
{
  sleepy: true,
  nap: function() 
  {
      this.sleepy = false
  }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

///////////////////
//var= can be redclared  ==can be declared below(after)(anywhere) the invocation(using variable) 
//let ==can not be redclared  ==intilize or declare must be before using the variable
//const ==strict ==must be intilized =not possible to reassign