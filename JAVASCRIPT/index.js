console.log('Hello I\m here')

// Variables
var name = "Ameer Hamza"

// scope variablename = value/data
const myName = "Ameer Hamza"
const myAge = 'twenty two'
const myAge1 = `twenty two`

const myAge2 = 1234


const isLogin = false;

let myName1 = undefined;

myName1 = "Ameer Hamza"

const xyz = Symbol('xyz')

const value1 = null
console.log(myName)

console.log(typeof (value1), value1)

const employe = {
    name: "Ameer Hamza",
    age: 22,
    isLogin: false,
    myName1: undefined,
    xyz: Symbol('xyz'),
    value1: null
}

const nums = [1, 2, 3, 4, 5, "ameer", true, undefined, null, Symbol('xyz')]



{
    const name1 = "Ameer Hamza"
    let name2 = "Ameer Hamza"
    name2 = "Hamza"

    console.log(name1)
}





// JS introduction (Interpreted, single threaded, dynamic, weakly typed, prototype based, multi paradigm)
// Variables (var, let, const)
// Data types (primitive and non-primitive)


let abc = "Ameer"
abc = "Hamza"

console.log('let print', abc)

const abc1 = "Ameer"
// abc1="Hamza"


console.log('const', abc1)


//priimitive data types (String, Number, Boolean, undefined, null, Symbol)
// non-primitive (Object, Array, Function)


const teacher = {
    name: "Ameer Hamza",
    age: 22,
    isLogin: false,
    myName1: undefined,
    xyz: Symbol('xyz'),
    value1: null
}

// console.log(teacher.name)

// Operators (Arithmetic, Assignment, Comparison, Logical)


// Arithmetic Operators (+ - * / % ++ --)



let num1 = 5
let num2 = 20


++num1

--num1

const result = num1 * num2
console.log(result)


// Assignment Operators (=, +=, -=, *=, /=, %=)

let num3 = 10
num3 = num3 + 5

num3 -= 5


console.log(num3)


// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)


let comp1 = 10
let comp2 = "10"


let compResult = comp1 != comp2

console.log(compResult)

// Logical Operators (&&, ||)


if (comp1 > 15 || comp2 == "10") {
    console.log('Both conditions are true')
}





//////////////// Conditional Statements (if, else if, else, switch)

// if(condition){
//     // True
// // body statement
// }

let age = 18;

// if (age > 19) {
//     // body statement
//     console.log("You are Adult!!!!")
// }


// if else statement


if (age > 19) {
    // body statement
    console.log("You are Adult!!!!")
}
else {
    console.log("You are not Adult!!!!")
}


// if else if statement

// if (){

// } else if (){

// }

// else {

// }

let day = "Monday"
day === "Monday"

switch (day) {
    case "Monday":
        console.log("First day of the week")
        break;
    case "Friday":
        console.log("First day of the week")
        break;
    default:
        console.log("Not a valid day")
}


// Loops (for, while, do while)

// console.log('Num1', 1)
// console.log('Num2', 2)
// console.log('Num3', 3)
// console.log('Num4', 4)
// console.log('Num5', 5)

// for("initialization, condition, and afterthought"){

// }

for (let start = 1; start <= 150; start++) {
    // console.log('Hello Meer Hamza', start)
}


let startNum = 1

// const endNum = prompt("Enter a number")

// while (startNum <= endNum) {
//     console.log('While Loop', startNum)
//     startNum++
// }



do {
    console.log('Do While Loop', startNum)
    startNum++
} while (startNum <= 10)



// for in


const person = {
    name: "Ameer Hamza",
    age: 22,
    adress: 'RYK'
}

// for(let xyz in person){

// }

// for(let xyz in person){
// console.log('Key is: ', xyz, 'Value is: ', person[xyz])
// }


// for(let xyz of person){

// }
const array=[1,2,3,4,5]

for(let index of array){
console.log(index+10)
}

