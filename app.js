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

function isAdult(age) {
    if (age >= 0 && age < 18) {
        return age = 'Minor';
    } else if (age >= 18) {
        return age = 'Adult';
    } else {
        return age = 'Error: Invalid Input';
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
    return email = name + '@' + domain;
}

console.log('Exercise 4 Result:', generateEmail("randomexample", "gmail.com"))

/*--- EXERCISE 5 greetUser()---*/

function greetUser(name, timeOfDay) {
    return greetings = "Good " + timeOfDay + ", " + name;
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
        return tempCelsius = temp + " (Celcius)";
    } else if (scale === "F") {
        temp = (temp * (9/5)) + 32;
        return tempFaren = temp + " (Farenheit).";
    } else {
        console.log("ERROR - Incorrect input, use 'C' or 'F'.")
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "F"))

/*--- EXERCISE 9 basicCalculator()---*/

function basicCalculator(x, y, operation) {
    if (operation === "add") {
        return answer = x + y;
    } else if (operation === "subtract") {
        return answer = x - y;
    } else if (operation === "multiply") {
        return answer = x * y;
    } else if (operation === "divide") {
        return answer = x / y;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"))

/*--- EXERCISE 10 calculateGrade()---*/

function calculateGrade(score) {
    if (score >= 90) {
        return grade = "A";
    } else if (score >= 80 && score < 90) {
        return grade = "B";
    } else if (score >= 70 && score < 80) {
        return grade = "C";
    } else if (score >= 60 && score < 70) {
        return grade = "D";
    } else if (score >= 0 && score < 60) {
        return grade = "F";
    } else {
        return grade = "ERROR - INVALID INPUT";
    }
}

console.log('Exercise 10 Result', calculateGrade(62));

/*--- EXERCISE 11 createUsername()---*/

function createUsername(firstName, lastName) {
    nameLength = firstName.length + lastName.length; // 13
    firstName = firstName.substring(0, 3); // "Sam"
    lastName = lastName.substring(0, 3); // "Gre"
    return userName = firstName + lastName + nameLength;
}

console.log('Exercise 11 Result:', createUsername("John", "Ng"));

/*--- EXERCISE 12 numArgs()---*/

function numArgs() {
    return answer = arguments.length;
}

console.log('Exercise 12 Result:', numArgs(2, 3, 4, "I don't know what I'm doing"));