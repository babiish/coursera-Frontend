// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
  for (item of dairy) {
    console.log(item);
  }
}

logDairy(); // Output: cheese sour cream milk yogurt ice cream milkshake


// Task 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (i of Object.keys(bird)) {
        console.log(i + ': ' + bird[i])
    }
}
birdCan();
    


    // Task 3
    
    function animalCan() {
        for (i in bird) {
            console.log(i + ': ' + bird[i]);
        }
    }

animalCan()