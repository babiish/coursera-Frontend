///templet literals backtick //interpolation

let greet = "Hello"
let place = "World"

console.log(`${greet} ${place} !`) //display both variables using template literals



//***********for each
//
const arr = [1, 2, 3]

arr.forEach(function(element)
 {
  console.log(element);
})    // Output: 1 2 3


////
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index)  //parametrs= (array itself,optional index)
{
    console.log(`${index}. ${fruit}`)
}

fruits.forEach(appendIndex);







//
//filter
const arr2 = [1, 2, 3, 4, 5];

const filteredArr = arr.filter(function(element) {
  return element % 2 === 0;
});

console.log(filteredArr);       // Output: [2, 4]


const nums = [0,10,20,30,40,50];
nums.filter( function(num) //
{
    return num > 20;   //ret30 40 50
})









//map
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

const arr3 = [1, 2, 3];

const mappedArr = arr.map(function(element) {
  return element * 2;
});

console.log(mappedArr);
// Output: [2, 4, 6]


///map = dictionaries
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);




///set
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);