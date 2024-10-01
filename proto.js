// INHERITING METHODS FROM THE PARENT OBJECT

function Animal(name, color, isWild, sound) {
  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;
}

// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";

// an instance of the class

const dog = new Animal("dog", "black", false, "bark");

function DogLocation(...props) {
  Animal.apply(this, props);

  // adding a new property

  this.location = "city";
}

// inheriting the Animal prototype

DogLocation.prototype = Object.create(Animal.prototype);

const dogHabitat = new DogLocation("dog", "brown");

console.log(dogHabitat);
