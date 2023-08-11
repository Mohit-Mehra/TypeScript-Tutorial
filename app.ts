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

let multiple = (num: number):number=>{
    return num*2;
}

let multiple2 = (num: number)=>{
    return num*2;
}

let multiple3 = (num: number):void=>{
    // do something
}

let sum = (num1:number,num2:number,another?:number)=>{
    return num1+num2
}

// TYPE ALIASES
type UserType = {
    username: string;
    age: number;
    phone?: string
}

let betterFunc = (user:UserType)=>{
    console.log(user.age);
}
type myFunc = (a:number, b:number)=> void

let write: myFunc = (num,str)=>{
    console.log(num+"times"+str)
}

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
}

// INTERFACES
interface IUser {
    username: string;
    email: string;
    age: number;
}

interface IEmployee extends IUser{
    employeedId: number;
}

const emp : IEmployee = {
    username: "Mohit",
    email: "dfg",
    age: 20,
    employeedId: 1
}

// Generics
interface IAuthor{
    id: number
    username: string
}

interface ICat{
    id: number
    title: string
}

interface IPost {
    id: number
    title: string
    desc: string
    extra: IAuthor[] | ICat[]
}

interface IPostBetter<T> {
    id: number
    title: string
    desc: string
    extra: T[]
}


const testME: IPostBetter<String> = {
    id: 1,
    title: "HELLO",
    desc: "TEST",
    extra: ["Str","Str2"],
}

interface IPostEvenBetter <T extends object> {
    id: number
    title: string
    desc: string
    extra: T[]
}

const testME2: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: "HELLO",
    desc: "TEST",
    extra: [{id:1,username:"Mohit"}],
}