"use strict";

// To use with LIVE-SERVER run ---> babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running!");

// create app object title/subtitle
// user title/subtitle in the template
// render template

// JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

// Create user varaialbe for reusable code
var user = {
  name: "Alfred",
  age: 26,
  location: ""
};

//getLocation function determines if user varible provided a location
function getLocation(location) {
  //location is the aurgument
  if (location) {
    // if location is preovided return location entry
    return location;
    // if locatoin is not  provided return Unknown
  } else {
    return "Unknown";
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    getLocation(user.location)
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
