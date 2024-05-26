// Introduction to Arrays
// new Array
// .length
// [index]
// different data in array, such as:
// array, number, string, boolean
// combine function

// let arr = [
//     "Nadav",
//     "Nikita",
//     "Sheina",
//     "Yosef Haiim",
//     "Avigail",
//     "Hiba",
//     "Arad"
// ];

// let data = arr;
// console.log(data);

let arr = [10,15,20];

function calcAverage(num1,num2,num3){
    return (num1 + num2 + num3) / 3;
}

console.log(calcAverage(arr[0],arr[1],arr[2]));

let arr2 = [80,65,95];
function calcAverage2(arr){
    return (arr[0] + arr[1] + arr[2]) / 3;
}

console.log(calcAverage2(arr2));

