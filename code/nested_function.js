/**
 * This is a function that creates a closure to store a person's name.
 * @param {string} name - The name of the person.
 * @returns {Function} A function that takes a location as argument and returns a string.
 */
function personalInfo(name) {
  /**
   * This is a function that creates a string with the person's name and location.
   * @param {string} location - The location of the person.
   * @returns {string} A string that says where the person lives.
   */
  function address(location) {
    return `My Name Is ${name} And I Live In ${location}`;
  }
  return address;
}

// Create a new function with the name "Angga"
const person = personalInfo("Angga");
// Call the returned function with the location "Mataram"
const infoLocation = person("Mataram");
// Log the result
console.log(infoLocation);
