let v = "hello";

v = "hi";

let age = 18;

let ageWithType: number;

ageWithType = 18;

let testString: string;
testString = 'Hello';

let testBoolean: boolean;
testBoolean = true;

let testStringOrNumber: string | number;
testStringOrNumber = 10
testStringOrNumber = "hey"

let names = ["Brock","Mohit"]
// names.push(3)
names.push("Goku")

let numbers = [11,22,33]
numbers.push(10)

let testStringArray: string[];
testStringArray = ["one","two"]

let testStringOrNumberArray: (string | number)[]
testStringOrNumberArray = [1,"Two"]

// Object
let user = {
    username: "Mohit",
    age: 21,
}

user.username = "Mehra"
user.age = 20
// user.phone = "+1234566789"

let userObj : {
    username: string,
    age: number
}
userObj = {
    username: "Goku",
    age: 30
}


let userObj2 : {
    username: string,
    age: number,
    phone ?: string
}
userObj2 = {
    username: "Goku",
    age: 30,
    phone: "+12346"
}

let testAny: any;
let testAnyArray: any[]

// Functions
let sayHi = ()=>{
    console.log("Hi")
}

let funcReturnString = ():string=>{
    console.log("hey")
    return "Mohit"
}


