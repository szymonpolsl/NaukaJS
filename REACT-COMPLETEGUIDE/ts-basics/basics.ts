// Primitives: number, string, boolean, null, undefinded
// More complex types: arrays, objects
// Function types, parameters
export {}
//Primitives
let age:number;

age = 12.1; //good 
//age = '12'; //error

let username:string;

username = 'Szymon';

let isInstructor:true;

isInstructor = true;

// let hobbies:null;

// hobbies = 12;

// More complex types

//Arrays

let hobbies: string[]; //array odf strings

hobbies = ['Sport','Cooking'];

let person: {
    name:string;
    age:number;
}; // :any - wszystko dozwolone

person = {
    name:'Szymon',
    age: 22
}

// person = {          // ten nie pasuje do wzoru z góry
//     isEmployee:true
// }

let people:{
    name:string;
    age:number;
}[];  // nie chce trzymać tylko takiego obiektu ale tablicę takich obiektów  [] - oznacza że będzie tablica obiektów z name i age




// Type inference - dodawanie typu to redundancja
// let course = 'React - The Complete Guide';

// course = 12341;



// Union types
let course:string | number  = 'React - The Complete Guide';
course = 12341;

let hobbies2:null | number;
hobbies2 = 12;

//Type Alias

type Person ={
    name:string;
    age:number;
}

let people2:Person[]

interface Person3 {             // to samo co type tylko to można rozszerzać
    name:string;
    age:number;
}

interface Person4 extends Person3 {
    surname:string
}

let people4:Person4 = {
    name:'Max',
    age:42,
    surname:'Muller'
}


// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print (value:any) {
    console.log(value);
}


// Generics
// function insertAtBeginning(array:any[],value:any) {   // zwykła funkcja
//     const newArray = [value, ...array];
//     return newArray;
// }

function insertAtBeginning<T>(array:T[],value:T) {   // T oznacza że typ nie jest żadnym typem, że nie jest to żadna wartość
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray,-1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'],'d') // ta tabela też jest dobrze bo zmienne są takiego samego typu

//updatedArray[0].split(''); niemcowi nie działało też xd

//Generic Types

let numbers: number[] = [1, 2, 3];          // oznaczenie tablicy numerycznej
let numbers1: Array<number> = [1, 2, 3];    // inne oznaczenie tablicy numerycznej

const stringArray2 = insertAtBeginning<string>(['a', 'b', 'c'], 'd'); // aleternatywne oznaczenie z kilku linijek wyżej


