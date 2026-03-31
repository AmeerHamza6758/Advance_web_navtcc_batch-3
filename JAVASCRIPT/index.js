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