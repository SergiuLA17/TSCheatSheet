const json = '{"x": 10, "y": 20}';
const obj: number = JSON.parse(json);
//const coords: { x: number; y: number } = JSON.parse(json);

const json1 = '{"x": 10, "y": 20}';
const obj1 = JSON.parse(json);

let words = ['red', 'green', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

const add = (a: number, b: number): boolean => {
    return true;
}



function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

//se anoteaza cu void in caz ca nu returneaza nimic, dar de fapt putem returna undefined sau null
const logger = (message: string): void => {
    console.log(message);
}

//se anoteaza cu never in caz ca nu returneaza nimic si nu se poate ajunge la finalul functiei
const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

//syntax destructuring inseamnta ca vom extrage date si weather din obiectul forecast si vom crea 2 variabile date si weather si le vom anota cu tipul Date si string

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}


const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}
//in cazul dat extragem din obiectul profile doar age si anotam variabila age cu tipul number
const { age }: { age: number } = profile;
//in cazul dat extragem din obiectul profile doar coords si anotam variabila coords cu tipul { lat: number; lng: number }
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;

console.log(age);
console.log(lat);
console.log(lng);

