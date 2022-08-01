// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(example);
let example = "I'm the example!"

// 1
console.log(hello);                                   
var hello = 'world';                                 
// would print hello
// actually ended up printing undefined. which makes sense after looking at it. var is hoisted and declares it but doesn't assign it

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// would print magnet

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// would print "only okay" and "super cool"
// didn't pint only okay. maybe because there is no var inside the function

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// would print chicken. and then half-chicken. 

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// would print chicken then fish. then undefined
// ended up throwing an error. mean is not a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// would print disco then rock then r&b
// ended up printing undefined, rock, r&b, then disco. this makes sense on inspection because at the top var is hoisted and genre is declared but not assigned

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// would either give an error because dojo doesn't have var. or if it prints, would console log seattle then burbank.
// ended up being more forgiven than expected and printed san jose, seattle, burbank and then san jose.

// 8 - bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// at first you would get {name:Chicago, students:65, dojo.hiring: true}
// and then would return "closed for now"
// Ended up getting a type error because were trying to assign "closed for now" to the constant variable, dojo