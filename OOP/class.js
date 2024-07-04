const person  = {
    name: "Andi",
    email :"andi@gmail.com",
    greet(){
        return "Hello, " + this.name
    }
}

//template buat object
class Person {
    name;
    #email;
     static species = "Manusia"

constructor (name, surel){
    this.name = name
    this.#email = surel
}
greet(){
    return "Hello," + this.name
    }


getEmail() {
    return this.#email
}
}
const person1 = new Person("Budi", "budi@gmail.com")
const person2 = new Person("Cahyo", "cahyo@gmail.com")

// console.log(person);
// console.log(person1);
// console.log(person2);
// console.log(person1.name);
// console.log(person2.name);
// console.log(person1.greet());
// console.log(person2.greet());


console.log(Person.species);
console.log(Math.PI);