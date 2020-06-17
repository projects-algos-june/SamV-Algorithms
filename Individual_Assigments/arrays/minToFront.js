//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

console.log("\n"+"Excercise - Min to Front");
minToFront([4,2,1,3,5])// Should return [1,4,2,3,5]

// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(array){
    var min = array[0]
    var minIndex = 0
    for (i = 0; i < array.length; i++){
        if (array[i]<min){
            min = array[i]
            minIndex = i
        }
    }
    for (i = minIndex; i > 0; i--){
        array[i]=array[i-1]
    }
    array[0] = min
    console.log(array)
    return array;
}
 