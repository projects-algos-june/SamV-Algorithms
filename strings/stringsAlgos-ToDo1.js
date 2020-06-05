
//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
removeBlanks(" Pl ayTha tF u nkyM usi c ")// Should return "PlayThatFunkyMusic

// Excercise 2

console.log("\n"+"Excercise 2");
getDigits("0s1a3y5w7h9a2t4?6!8?0")

// Excercise 3

console.log("\n"+"Excercise 3");

// Excercise 4

console.log("\n"+"Excercise 4");


// Excercise 5

console.log("\n"+"Excercise 5");


// =========================================================================================
// ANSWERS FOR FUNCTIONS
// =========================================================================================

// Excercise 1

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(aString){
    stringWithoutSpaces = aString.split(' ').join('')
    console.log(stringWithoutSpaces)
    return stringWithoutSpaces;
}
 
// Excercise 2

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(aString){
    charsArray = aString.split('')
    digitsArray = []
    for (i =0; i < charsArray.length; i++){
        if (isNumber(charsArray[i])){
            digitsArray.push(charsArray[i])  
        }
    }
    return false;
}


// Excercise 3

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".


// Excercise 4

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).



// Excercise 5

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.



