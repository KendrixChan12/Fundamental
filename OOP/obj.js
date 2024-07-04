// const car = {
//     brand : "BMW",
//     model : "M135i xDrive",
//     price: 80000000
// }

// console.log(car)

// //accessing value
// console.log(car.model)
// console.log(car["brand"])

const person = {
    name: "Budi",
    email: "budi@gmail.com",
    address: {
        city: "Jakarta",
        country: "Indonesia"
    },
    greet() {
        console.log("Hello")
    },
}

// console.log(person.address.city)
// console.log(person["address"] ["country"])

// person.greet()

//edit value object
person.name = "Andi"

//add value
person.hobby = "Coding"

console.log(person)

//delete value
delete person.hobby

// console.log (person)

// optional chaining
console.log(person.address?.city)

// console.log(person.name + " " + person.address.city + " " +person.address.country)

console.log(Object.keys(person))

// for (let key in person) {
//     console.log(key)
//     console.log(person[key])
// }

//object destructuring
const { name, email} = person
console.log(name, email);

// spread operator

const object1 = {
    name: "Kendrix"
}

const object2 = {
    gmail : "kendrix@gmail.com"
}

const object3 = {
    ...object1,
    ...object2
}

console.log(object3);