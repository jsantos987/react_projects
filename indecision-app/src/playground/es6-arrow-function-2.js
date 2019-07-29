// argument object - no longer bound with arrow function
const add = function(a, b) {
  return a + b;
};
console.log(add(55, 9));

const add2 = (a, b) => {
  return a + b;
};
console.log(add2(55, 40));

// this keyword - no longer bound and a ES5 Function is required.....
// Using a "forEach" Loop to loop through each item in array
const user = {
  name: "John",
  cities: ["Los Angelos", "Lee", "San Antonio"],
  printPlacesLived: function() {
    this.cities.forEach(city => {
      console.log(this.name + " has lived in " + city);
    });
  }
};
user.printPlacesLived();

// Using map to loop through array with a arrow function to shorten
const user2 = {
  name: "John",
  cities: ["Los Angelos", "Lee", "San Antonio"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user2.printPlacesLived());

// CHALLLENGE AREA

// create const named multiplier
const multiplier = {
  // create array named "numbers" to multiply by a single number
  numbers: [4, 8, 10],
  // create method named "multiplyBy" - single number
  multiplyBy: 2,
  // multiply - return a new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]
