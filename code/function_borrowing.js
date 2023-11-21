/**
 * Class representing a Dog.
 */
class Dog {
  /**
   * Create a dog.
   * @param {string} name - The name of the dog.
   * @param {number} age - The age of the dog.
   * @param {string} breed - The breed of the dog.
   */
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  /**
   * Get a string representing the dog's details.
   * @return {string} A string representing the dog's details.
   */
  tellUsAboutYourSelf() {
    return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`;
  }

  /**
   * Get a string representing the dog's bark.
   * @return {string} "WOOF!!!".
   */
  woof() {
    return "WOOF!!!";
  }
}

let fido = new Dog("Fido", 3, "dachshund");
console.log(fido.tellUsAboutYourSelf());

/**
 * Class representing a Cat.
 */
class Cat {
  /**
   * Create a cat.
   * @param {string} name - The name of the cat.
   * @param {number} age - The age of the cat.
   * @param {string} breed - The breed of the cat.
   */
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  /**
   * Get a string representing the cat's meow.
   * @return {string} "MEOW!!!".
   */
  meow() {
    return "MEOW!!!";
  }
}

let sparkles = new Cat("Sparkles", 5, "Siamese");
console.log(fido.tellUsAboutYourSelf.call(sparkles));
