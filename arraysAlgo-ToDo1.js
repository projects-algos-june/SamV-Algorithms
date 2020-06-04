
//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
printsValuesAndSums([6,3,5,1,2,4]); // Should return 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// Excercise 2

console.log("\n"+"Excercise 2");
valueTimesPosition([6,3,5,1,2,4]); // Should return [0,3,10,3,8,20]

// =========================================================================================
// ANSWERS FOR FUNCTIONS
// =========================================================================================


// Excercise 1

// Print Values and Sum
// Print each array value and the sum so far using the array [6,3,5,1,2,4];
// The expected output will be: 

// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

function printsValuesAndSums(testArr){
    var sum = 0;
    for(var i=0;i<testArr.length;i++){
        sum = sum+testArr[i];
        console.log("Num: " + testArr[i] + ", Sum: " + sum);
    }
}
 
// Excercise 2

// Value * Position
// Multiply each value in the array [6,3,5,1,2,4] by its array position
// The expected output will be:

function valueTimesPosition(testArr){
   
    var newArray =[];
    for(var i=0;i<testArr.length;i++){
        newArray[i] = testArr[i]*i;
    }
    console.log(newArray);
}
