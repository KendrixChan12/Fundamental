function merge(arr1, arr2) {
    arr2.forEach ((student) => {
        const idx = arr1.findIndex((value) => value.name == student.name && value.email == student.email)
        if (idx == -1) arr1.push(student)
    })
    return arr1
}
const arrStd1 = [
    { name: "Student 1", email: "student1@gmail.com"},
    { name : "Student 2", email: "student2@gmail.com"}
]
const arrStd2 = [
    { name: "Student 1", email: "student1@gmail.com"},
    { name : "Student 3", email: "student3@gmail.com"}
]

console.log(merge(arrStd1, arrStd2))