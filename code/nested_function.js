// Pada kode pertama, fungsi personalInfo mengembalikan referensi fungsi address tanpa memanggilnya. Ini berarti bahwa ketika Anda menggunakan personalInfo dan memberikan sebuah lokasi, Anda sebenarnya mendapatkan referensi ke fungsi address yang dapat Anda panggil nanti.
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

const getInfo = personalInfo("John");
const result = getInfo("New York");
console.log(result); // Output: My Name Is John And I Live In New York

//Pada kode kedua, fungsi personalInfo langsung memanggil fungsi address dan mengembalikan hasilnya. Ini berarti bahwa hasil dari personalInfo adalah hasil dari pemanggilan langsung dari address dengan lokasi yang diberikan.
// function personalInfo(name) {
//   /**
//    * This is a function that creates a string with the person's name and location.
//    * @param {string} location - The location of the person.
//    * @returns {string} A string that says where the person lives.
//    */
//   function address(location) {
//     return `My Name Is ${name} And I Live In ${location}`;
//   }
//   return address();
// }

// const result = personalInfo("John", "New York");
// console.log(result); // Output: My Name Is John And I Live In New York
