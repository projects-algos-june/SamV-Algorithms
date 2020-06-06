
//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
removeBlanks(" Pl ayTha tF u nkyM usi c ") // Should return "PlayThatFunkyMusic"

// Excercise 2

console.log("\n"+"Excercise 2");
getDigits("0s1a3y5w7h9a2t4?6!8?0") // Should return "01357924680"

// Excercise 3

console.log("\n"+"Excercise 3");
acronym(" there's no free lunch - gotta pay yer way. "); // should return "TNFL-GPYW"
acronym("Live from New York, it's Saturday Night!") // should return "LFNYISN"

// Excercise 4

console.log("\n"+"Excercise 4");
countNonSpaces("Honey pie, you are driving me crazy") // should return 29


// Excercise 5

console.log("\n"+"Excercise 5");
removeShorterStrings(["Today","is","a","great","day!"], 3) // should return ["Today", "great", "day!"]


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
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 01357924680.

function getDigits(aString){
    var charsArray = aString.split('')
    var digitsArray = []
    
    for (i =0; i < charsArray.length; i++){
        if (!isNaN(charsArray[i])){
            digitsArray.push(charsArray[i])  
        }
    }
    var digits = digitsArray.join('')
    console.log(digits)
    return digits;
}


// Excercise 3

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(aString){
    var stringArray = aString.split(' ')
    var acronymArray = []
    for (i =0; i < stringArray.length; i++){
        acronymArray.push(stringArray[i].toUpperCase()[0])  
    }
    var acronym = acronymArray.join('')
    console.log(acronym)
    return acronym;
}

// Excercise 4

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpaces(aString){
    var counter = 0
    for (i =0; i < aString.length; i++){
        if (aString[i] != " "){
            counter++
        } 
    }
    console.log(counter)
    return counter;
}

// Excercise 5

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShorterStrings(stringArray, minLength){

    for (var i = stringArray.length-1; i >=0; i--){
        if (stringArray[i].length < minLength){
            for (var j = i; j < stringArray.length-1; j++){
                [stringArray[j],stringArray[j+1]] = [stringArray[j+1],stringArray[j]]
            }
            stringArray.pop()
        } 
    }
    console.log(stringArray)
    return stringArray;
}



