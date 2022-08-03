// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// I think that it will print an array with [one random car from cars, then another random car from cars]
// It ended up printing Tesla then mercedes. So the first element from cars and then the second element from cars

// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
// Will just print Elon. 
// line 21 will not run as there is no variable outside the object called name
// Ended up just throwing an error, "name is not defined"

// Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// Will print 12345 and then an error because hashedPassword is not in the person object
// Ended up printing 12345 and then undefined

// Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// first is 2, second is 5, third is 2. would print false and then true

// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// would print value then [1, 5, 1, 8, 3, 3] then undefined or error
// ended up printing value, then [1, 5, 1, 8, 3, 3], then 1, then 5.
// the 1 printed makes sense because it is taking the first element out of secondKey. a little confused as to how willThisWork printed.
// i guess a comma in an object in javascript tells you to grab the next element.
