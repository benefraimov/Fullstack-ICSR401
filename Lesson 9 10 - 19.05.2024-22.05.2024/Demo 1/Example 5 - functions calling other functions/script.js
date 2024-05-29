// Functions Calling Other Functions

function calc(num1,num2,mulitplier){
    let number = num1+num2;
    return multiply(number,mulitplier);
}

function multiply(num,mulitplier){
    return num * mulitplier;
}

// console.log((1+1) * 2);
let data = calc(5,5,2);
console.log(data);