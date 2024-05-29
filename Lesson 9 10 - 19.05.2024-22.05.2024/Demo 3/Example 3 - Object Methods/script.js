// Object Methods
// create function in an object
// work with this keyword
// for example

// const objExample = {
//     age: 20,
//     birthYear: 20,

//     calcAge: function() {
//         this.age = 2080 - this.birthYear;
//         return this.age;
//     }
// }

const Class = {
    grade: 1,
    name: "Maor",
    CongratzStudent: function(inClass){
        console.log("Welcome " + this.name + " To Grade: " + this.grade + (inClass ? " In Class" : " Not In Class"));
    }
}

console.log(Class.CongratzStudent(true));

Class.grade = 12;

console.log(Class.CongratzStudent(false));