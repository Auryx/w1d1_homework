//  Section 1
//  1. DRY stands for Don't Repeat Yourself. We should pay attention to it because avoiding repetitions leads to faster coding and more efficient code. We have tools like for and while loops to help us write DRY code.
//  2. const cannot be reassigned a value (immutable), while var and let can be. var is globally/function scoped and can be redeclared, while let and const are block scoped. var if left undefined will still be initialized, while let will not be initialized until definition.
//  Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
var butte = (a !== b) 
console.log(butte)//1
var butte = (c !== d) 
console.log(butte)//2
var butte = ('Name'==='Name')
console.log(butte)//3
var butte = (a < b < c)
console.log(butte)//4
var butte = (a >= a < d)
console.log(butte)//5
var butte = (e !== 'Kevin')
console.log(butte)//6
var butte = (48 == '48')
console.log(butte)//7
var butte = (f !== e )
console.log(butte)//8
var g = 0
console.log(g)
var g = (b + c)
console.log(g)
// I used var because I know that var can be redeclared while let and const cannot be. 
// I get an error saying "SyntaxError: Identifier 'g' has already been declared"
// if I write 10 = g I will get an error, stating that there is an Invalid left-hand side in assignment. 
const h = a < (b || f) === !f && e !== c
console.log(h)
// Section 3
// Inf. Loop 1: The code would be infinite, as the while loop condition is never changed and will always be true. 
// Inf. Loop 2: The code would be infinite, as the while loop condition is a const and is immutable.
let letters = "A";
let i = 0;

//start a while loop for as long as i is less than 20
while (i < 20) {
    //adds an "A" to letters
	letters += "A";
    // increments the value of i by 1
	i++;
//closes the while loop, the code inside will run until the while condition is false
}
// prints letters to the screen/terminal window/console
console.log(letters);
// expected result: "AAAAAAAAAAAAAAAAAAAAA"
// The result from the while loop was expected. 
// Section 4
// The first component of the control panel is: the initialization. this usually is 1 or more loop counters than can be declared in the expression.
// The second component of the control panel is: the condition. if the value of this is true, the loop executes; if not, the loop ends. 
// The third component of the control panel is: the afterthought. this code executes after each loop, usually updating the loop counters. 
for (let i = 0; i <= 999; i++) {
    console.log(i)
}
for (let i = 999; i >= 0; i--) {
    console.log(i)
}
for (let i=1; i <= 10; i++) {
    console.log(`The value of i is ${i} of 10`)
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i=0; i < StarWars.length; i+=2) {
    console.log(StarWars[i])
}