
//is Truthy

// create a variable and assign it a value
const isTruthy = false;

// for the falsy statments we specified each falsy example
// this includes 0, empty string, undefined, null, false 
if (isTruthy === 0) {
    console.log(`this is 0`);

}
else if (isTruthy === ``){
    console.log(`the empty string is falsy`)
}
else if (isTruthy === undefined){
    console.log(`undefined is falsy`)
}
else if (isTruthy == null){
    console.log(`the NULL value is falsy`)
}
else if (isTruthy === false){
    console.log(`the boolean value false is falsy`)
}

// everything else is truthy

else {
    console.log(`this isn't falsy`)
}


// Number Line

// create variables num1 and num2

const num1 = -750;
const num2 = 0;


// add num1 and num2 to create sum

let sum = num1 + num2;

// create if for sums greater than 100

if (sum > 100){
    console.log(`${sum} is greater than 100`)
}

// create else if for sums greater than 100
else if (sum <= 100 && sum > 0){
    console.log(`${sum} is greater than 0`)
}

// create else if for sums for -1
else if (sum === 0){
    console.log(`${sum} is equal to 0`)
}

// create else if for sum 0
else {
    console.log(`${sum} is a neg num`)
}

// greater than 5


// create variables num1 and bum2

const numb1 = 5;
const numb2 = 6;

// create if statement num1 and num2 that if greater than 5 is true

if (numb1 >= 5 && numb2 >= 5){
    console.log(true)
}

//create else statement saying that is either/both numbs are less than 5 its false

else{
    console.log(false)
}


//pair and compare

//create 2 variable sets
const param1A = "cat";
const param1B = "cat";
const param2A = 6;
const param2B = "6";


//create if statement: if 1 pair is true show truthy
if ((param1A && param1B) || (param2A && param2B)) {
  console.log(true);

// create else statement for everything else
} else {
  console.log(false);
}







