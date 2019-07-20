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

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
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

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
