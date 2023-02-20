var json = '{"x": 10, "y": 20}';
var obj = JSON.parse(json);
//const coords: { x: number; y: number } = JSON.parse(json);
var json1 = '{"x": 10, "y": 20}';
var obj1 = JSON.parse(json);
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
var add = function (a, b) {
    return true;
};
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
//se anoteaza cu void in caz ca nu returneaza nimic, dar de fapt putem returna undefined sau null
var logger = function (message) {
    console.log(message);
};
//se anoteaza cu never in caz ca nu returneaza nimic si nu se poate ajunge la finalul functiei
var throwError = function (message) {
    throw new Error(message);
};
var forecast = {
    date: new Date(),
    weather: 'sunny'
};
//syntax destructuring inseamnta ca vom extrage date si weather din obiectul forecast si vom crea 2 variabile date si weather si le vom anota cu tipul Date si string
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
var profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
//in cazul dat extragem din obiectul profile doar age si anotam variabila age cu tipul number
var age = profile.age;
//in cazul dat extragem din obiectul profile doar coords si anotam variabila coords cu tipul { lat: number; lng: number }
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(age);
console.log(lat);
console.log(lng);
