const identity = function (name) {
  if (name) {
    alert(`Your name is ${name}`);
  } else {
    console.error("Enter a valid input");
    alert(`Sorry, incorrect input. Refresh the page and try again. Thank You`);
  }
};
let name = window.prompt("Input your name: ");
identity(name);
