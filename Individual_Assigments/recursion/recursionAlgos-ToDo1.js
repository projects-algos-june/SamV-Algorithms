
//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
console.log(recursiveSigma(5)) // Should return 15 (1+2+3+4+5)
console.log(recursiveSigma(2.5)) // Should return 3 (1+2)
console.log(recursiveSigma(-1)) // Should return 0

// Excercise 2

console.log("\n"+"Excercise 2");
console.log(recursiveFactorial(3)) // Should return 6 (1*2*3)
console.log(recursiveFactorial(6.5)) // Should return 720 (1*2*3*4*5*6)




// =========================================================================================
// ANSWERS FOR FUNCTIONS
// =========================================================================================

// Excercise 1

// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function recursiveSigma(number){
    var sum;
    if (number < 1){
        sum = 0
    }
    else{
        sum = Math.floor(number) + recursiveSigma(number-1)
    }
    return sum
}
 
// Excercise 2

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function recursiveFactorial(number){
    var mult;
    if (number < 1){
        mult = 1
    }
    else{
        mult = Math.floor(number)*recursiveFactorial(number-1)
    }
    return mult
}





