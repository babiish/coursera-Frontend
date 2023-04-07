// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)      object(car) is not itratable
// }

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);     ///red  orange  yellow
}//array are itaratble


///Object.keys() 
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
console.log(Object.values(car2)); // [200, 'red']
console.log(Object.entries(car2)); //[ [ 'speed', 200 ], [ 'color', 'red' ] ]



///loop over objects
console.log('/////');
console.log('/////');

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) //[price,color,matrial,season]
{
    console.log(key, ":", clothingItem[key])
}

const car={
    engine:true,
    speed: 'slow'
}

const sportcar=Object.create(car);
sportcar.speed='fast'

for(i of Object.keys(sportcar))
{
    console.log(i +':' +sportcar[i])
}

console.log("for of = only itrate over object not prototype")