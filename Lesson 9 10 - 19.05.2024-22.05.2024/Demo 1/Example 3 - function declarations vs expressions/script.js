// Function Declarations vs. Expressions

function welcome(name){
    return "Welcome " + name; 
}

let data = welcome("Maor");

let welcome = function(name){
    return "Welcome " + name;
}
console.log(welcome("Haim"));
