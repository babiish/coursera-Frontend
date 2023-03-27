//oop class
//inheritance,  sub-class inherits from its super-class =  class Bird extends Animal { /* ...class code here... */ }

//encapsulation, making a code implementation "hidden" from other users, knot relevant to know for users = "abc".toUpperCase();

//  abstraction  is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept.  //focusing on what matters and ignoring unrelevant info

// polymorphism. "multiple forms"

class Animal {
  /* ...class code here... */
}

var myDog = Object.create(Animal); ///super class for everything is the Object class,
//Object.create() method. to create or instansiate objects of our class
console.log(Animal);
var myDog = new Animal(); //more common

//polymorphism
const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};
function ringTheBell(thing) {
  console.log(thing.bell());
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"
