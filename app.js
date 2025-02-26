/*---EXERCISE 1 maxOfTwoNumbers---*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result: ' + maxOfTwoNumbers(15, 9));

/*--- EXERCISE 2 isAdult()---*/
/*
Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age) {
    if (age >= 0 && age < 18) {
        age = 'Minor'
        return age;
    } else if (age >= 18) {
        age = 'Adult'
        return age;
    } else {
        age = 'Error: Invalid Input'
        return age;
    }
}

console.log('Exercise 2 Result:', isAdult(12));

/*--- EXERCISE 3 isCharAVowel ---*/

function isCharAVowel(letter) {
    switch (letter) {
        case "a" :
            letter = true;
            return letter;
        case "e":
            letter = true;
            return letter;
        case "i":
            letter = true;
            return letter;
        case "o":
            letter = true;
            return letter;
        case "u":
            letter = true;
            return letter;
        case "A" :
            letter = true;
            return letter;
        case "E":
            letter = true;
            return letter;
        case "I":
            letter = true;
            return letter;
        case "O":
            letter = true;
            return letter;
        case "U":
            letter = true;
            return letter;
        default:
            letter = false;
            return letter;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*--- EXERCISE 4 generateEmail()---*/

function generateEmail(name, domain) {
    email = name + '@' + domain;
    return email;
}

console.log('Exercise 4 Result:', generateEmail("randomexample", "gmail.com"))

/*--- EXERCISE 5 greetUser()---*/

function greetUser(name, timeOfDay) {
    greetings = "Good " + timeOfDay + ", " + name
    return greetings;
}

console.log('Exercise 5 Results:', greetUser("Tony Stark", "evening"));

/*--- EXERCISE 6 maxOfThree---*/

function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}

console.log('Exercise 6 Result:', maxOfThree(-1, 1, 0));

/*--- EXERCISE 7 calculateTip()---*/

function calculateTip(total, tipPercent) {
    tip = total * (tipPercent / 100);
    return tip;
}

console.log('Exercise 7 Result:', calculateTip(100, 33));

/*--- EXERCISE 8 convertTemperature()---*/

function convertTemperature(temp, scale) {
    if (scale === "C") {
        temp = (temp -32) *(5 / 9);
        tempCelsius = temp + " (Celcius)";
        return tempCelsius;
    } else if (scale === "F") {
        temp = (temp * (9/5)) + 32;
        tempFaren = temp + " (Farenheit).";
        return tempFaren;
    } else {
        console.log("ERROR - Incorrect input, use 'C' or 'F'.")
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "F"))

/*--- EXERCISE 9 basicCalculator()---*/

function basicCalculator(x, y, operation) {
    if (operation === "add") {
        answer = x + y;
        return answer;
    } else if (operation === "subtract") {
        answer = x - y;
        return answer;
    } else if (operation === "multiply") {
        answer = x * y;
        return answer;
    } else if (operation === "divide") {
        answer = x / y;
        return answer;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"))
