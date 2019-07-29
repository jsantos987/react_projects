// var should not be used as it can redefined by reassigned var...
var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

// let can be reassigned however, can redefined with let.
let nameLet = "Jen";
// let nameLet = "Julie"  <--- This will not work
nameLet = "Julie";
console.log("nameLet", nameLet);

// const can not be redefined.
const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  const petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block Scoping

const fullName = "John Santos";
let firstName = "";

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
