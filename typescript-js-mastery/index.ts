console.log('Hello TypeScript')

//Implicit Types

let helloWorld = "Hello, World!";
//helloWorld = 5

//Explicit Types
let firstName: string = 'John';
let age: number = 30;

//firstName = 5
//age = 'barry'

// Tuple
type stringAndNumber = [string, number]; 
let x: stringAndNumber = ["Hello", 10]

// Enums
enum Continents {
    North_America, 
    South_America, 
    Africa, 
    Asia, 
    Europe, 
    Antarctica, 
    Australia
}
//usage
var region = Continents.Africa //2

// Interface
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: 'John',
    id: 0
}

// Composing types -> Union
type WindowStates = "open" | "closed" | "minimized"
type OddNumberUnderTen = 1 | 3 | 5 | 7 |9

const windowState: WindowStates = "open"

const getLength = (param: string | string[]) => {
    return param.length; 
}




