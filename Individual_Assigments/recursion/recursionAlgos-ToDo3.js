
//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
console.log(recursiveBinarySearch([1,3,5,6],4)) // should return "false"
console.log(recursiveBinarySearch([4,5,6,8,12],5)) // should return "true"

// Excercise 2
console.log("\n"+"Excercise 2");
console.log(greatestCommonFactor(3,7))
console.log(greatestCommonFactor(18,27))
console.log(greatestCommonFactor(49,14))

// Excercise 3
console.log("\n"+"Excercise 3");
console.log(greatestCommonFactor_Refactored(123456,987654))




// =========================================================================================
// ANSWERS FOR FUNCTIONS
// =========================================================================================

// Excercise 1

// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.

function recursiveBinarySearch(array, target){
    
    // Base case
    let middleIndex = Math.floor(array.length/2);
    if (array[middleIndex] == target){
        return true
    }
    // Recursive case
    let leftArray = array.slice(0,middleIndex);
    let rightArray = array.slice(middleIndex+1);

    if (target < array[middleIndex] && array.length > 1){
        return recursiveBinarySearch(leftArray,target);
    }
    else if(target > array[middleIndex] && array.length > 1){
        return recursiveBinarySearch(rightArray,target);
    }
    else {
        return false;
    }
    
}
 
// Excercise 2

// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.


function greatestCommonFactor(a,b){
    // Base case
    if ( a == b ){
        return a
    }
    // recursive cases
    else if (a>b){
        return greatestCommonFactor(a-b,b)
    }
    else{
        return greatestCommonFactor(a,b-a)
    }
}

// Excercise 3

// Greatest Common Factor - Refactored
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function greatestCommonFactor_Refactored(a,b){
    // Base case
    if ( a == b ){
        return a
    }
    // recursive cases
    else if (a>b){
        if((a/b) % 1 == 0){
            return b;
        } 
        else{
            return greatestCommonFactor_Refactored(a-b,b)
        }      
    }
    else{
        if((b/a) % 1 == 0){
            return a;
        }
        else{
            return greatestCommonFactor_Refactored(a,b-a)
        }
    }
}




