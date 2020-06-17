//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
reverse([1,2,3,4,5]) // Should return [5,4,3,2,1]


// Excercise 2

console.log("\n"+"Excercise 2");
rotate([1,2,3,4,5],3) // Should return [3,4,5,1,2]


// Excercise 3

console.log("\n"+"Excercise 3");
filterRange([1,2,3,4,5],2,5) // Should return [3,4]


// Excercise 4

console.log("\n"+"Excercise 4");
arrConcat(['a','b'],[1,2]) // Should return ['a','b',1,2]

// =========================================================================================
// ANSWERS FOR FUNCTIONS
// =========================================================================================

// Excercise 1

// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(array){
    for (i = 0 ; i < Math.trunc(array.length/2); i++){
        [array[i], array[array.length-i-1]] = [array[array.length-i-1],array[i]]
    }
    console.log(array);
    return array;
}

// Excercise 2

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

function rotate(array,shiftBy){
    var counter = Math.abs(shiftBy)
    while (counter>0) {
        if (shiftBy > 0){ // shifting to the Right
            let temp = array[array.length-1];
            for (i = array.length-1; i > 0; i--){
                array[i] = array[i-1];
            }
            array[0] = temp;
        }
        else { // shifting to the Left
            let temp = array[0];
            for (i = 0; i < array.length-1; i++){
                array[i]=array[i+1];
            }
            array[array.length-1] = temp;
        }
        counter--;
    }
    console.log(array);
    return array;
}

// Excercise 3

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(array,min,max){
    
    for (i = array.length-1; i >= 0; i--){
        if(array[i]<=min || array[i]>=max){
            for (j=i; j< array.length-1;j++) {
                array[j] = array[j+1]
            }
            array.length = array.length-1
        }
    }
    
    console.log(array);
    return array;
}

//Excercise 4

// Concate
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arrayOne,arrayTwo){
    
    originalLength = arrayOne.length
    arrayOne.length = arrayOne.length + arrayTwo.length

    for (i = originalLength; i < arrayOne.length; i++){
        arrayOne[i] = arrayTwo[i-originalLength]
    }

    console.log(arrayOne);
    return arrayOne;
}