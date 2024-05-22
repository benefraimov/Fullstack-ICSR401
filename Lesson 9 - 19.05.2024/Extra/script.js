// write to dom

// let container = document.getElementById("container");
// let x = "";
// let i = 0;
// while(i < 10){
//     x += `<b>${i}</b>`;
//     i++;
// }
// container.innerHTML = x;

// click to write to dom

let container = document.getElementById("container");

function clickBtn(){
    container.innerHTML = "You Clicked The button";
}

function clickBGBtn(){
    container.style.backgroundColor = "blue";
}