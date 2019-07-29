// es5 standard functions using a CONST
// const square = function(x) {
//  return x * x;
// };
// console.log(square(8));

// ======================================
// Remove the CONST to create a function
// =======================================
function squareNoArrow(x) {
  return x * x;
}
console.log(squareNoArrow(6));

// ======================================
// Another ES6 ARROW FUNCTION - (VERBOSE)
// ======================================
const squareArrow = x => {
  return x * x;
};
console.log(squareArrow(20));

// ======================================
// ES6 Arrow Function using EXPRESSSION "shorthand" version
// ======================================
const squareArrow2 = x => x * x;
console.log(squareArrow2(5));

// Challenge - Create Regular Arrow Functon
const getFirstName = fullName => {
  return fullName.split(" ")[0];
};
console.log(getFirstName("John Santos"));

// const getFirstName2 = y => "Mike Smith_2";
// console.log(getFirstName2(y));
const getLastName = fullName => fullName.split(" ")[1];
console.log(getLastName("Alfred Santos"));

// Additonal Examples of regular ARROW FUNCTIONS
const getSecondOctate2 = octateNum2 => {
  return octateNum2.split(" ")[1];
};
console.log(getSecondOctate2("210 690 851"));

// Additional Example of EXPRESSION function.......
const getLastOctate = octateNum => octateNum.split(" ")[2];
console.log(getLastOctate("555 623 789"));
