
//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
console.log(recursiveBinarySearch([1,3,5,6],4)) // should return "false"
console.log(recursiveBinarySearch([4,5,6,8,12],5)) // should return "true"
// Excercise 2

console.log("\n"+"Excercise 2");




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
    if (array.length == 0){
        return false
    }
    // Recursive case
    
    let middleIndex = Math.floor(array.length/2);
    let leftArray = array.slice(0,middleIndex);
    let rightArray = array.slice(middleIndex+1);

    if (target < array[middleIndex]){
        return recursiveBinarySearch(leftArray,target);
    }
    else if(target > array[middleIndex]){
        return recursiveBinarySearch(rightArray,target);
    }
    else {
        return true;
    }
    
}
 
// Excercise 2

// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.

// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

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





