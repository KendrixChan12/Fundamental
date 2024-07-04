

function checkObj (obj1, obj2) {
    return obj1.a === obj2.a
}

// console.log(checkObj({a: 2}, {a: 1}));
// console.log(checkObj({a: "Hello"}, {a: 1}));
// console.log(checkObj({a: 1}, {a: 1}));
// console.log(checkObj({a: "1"}, {a: 1}));

const person1 = {
    name : "Andi",
    age: 20
}

// const person2 = {
//     name : "Andi",
//     age: 20
// }

// const person2 = person1

// person1.name = "Budi"

// console.log(person2);

let name1 = "David"

let name2 = name1

name1 ="John"

console.log(name2);