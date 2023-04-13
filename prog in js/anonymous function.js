// anonymous function is a function that is defined without a name. 
const add = function(x, y) {
    return x + y;
  };
  
  console.log(add(2, 3)); // Output: 5
  

///anonymous function=to define callbacks
//callbacks= which are functions that are passed as arguments to another function 
// and called at a later time. 
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8]

//The anonymous function takes each number in the array,
// multiplies it by 2, and returns the result. 
//The map function then creates a new array with the doubled values returned by the anonymous function.