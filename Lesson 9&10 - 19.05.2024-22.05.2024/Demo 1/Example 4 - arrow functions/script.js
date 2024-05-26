// Declaration Function
function welcome(name){
    return "Welcome " + name; 
}

// Expression Function

let data = welcome("Maor");

let welcome = function(name){
    return "Welcome " + name;
}
console.log(welcome("Haim"));

// Arrow Functions

let welcome = (name) => "Welcome " + name;

let variable = welcome("Yosef");
console.log(variable);