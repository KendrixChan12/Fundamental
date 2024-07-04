// function myFunction(arr){
//     let res ={}
//     for (let key in arr[0]) {
//         res [arr[0] [key]] = key
//     }
//     return res
// }

function myFunction(obj){
    let res ={}
    for (let key in obj[0]) {
        res [obj [0][key]] = key
    }
    return res
}

console.log(myFunction([{name: "David", age :20, email: "david@gmail.com"}]))