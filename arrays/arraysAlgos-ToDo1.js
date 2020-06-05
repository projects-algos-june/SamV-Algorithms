
//=========================================================================================
// REVIEWING ANSWERS OF FUNCTIONS
// =========================================================================================

// Excercise 1

console.log("\n"+"Excercise 1");
pushFront(["Feb", "March", "April", "June"], "Jan")// Should return ["Jan", "Feb", "March", "April", "June"]

// Excercise 2

console.log("\n"+"Excercise 2");
insertAt(["Feb", "March", "April", "June"], 1, "Jan")// Should return ["Feb","Jan", "March", "April", "June"]

// Excercise 3

console.log("\n"+"Excercise 3");
removeAt(["Feb", "March", "April", "June"], 1)// Should return ["Feb"]

// Excercise 4

console.log("\n"+"Excercise 4");
swapPairs([1,2,3,4])// Should return [2,1,4,3]
swapPairs(["Brendan",true,42])// Should return [true,"Brendan",42]

// Excercise 5

console.log("\n"+"Excercise 5");
removeDuplicates(["John Doe","John Doe","Mich Buckanon","Peter Petegreu","Peter Petegreu","Susan Phillips","Susan Phillips","Zack Efron"])// Should return ["John Doe","Mich Buckanon","Susan Phillips","Zack Efron"]



// =========================================================================================
// ANSWERS FOR FUNCTIONS
// =========================================================================================

// Excercise 1

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(array, newValue){
    array[array.length] = newValue
    for (i = array.length-1; i > 0; i--){
        array[i] = array[i-1]
    }
    array[0] = newValue
    console.log(array);
    return array;
}
 
// Excercise 2

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(array, index, newValue){
    array[array.length] = newValue
    for (i = array.length-1; i > index; i--){
        array[i] = array[i-1]
    }
    array[index] = newValue
    console.log(array);
    return array;
}

// Excercise 3

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(array, index){
    for (i = array.length-1; i > index; i--){
        array.pop()
    }
    console.log(array);
    return array;
}

// Excercise 4

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(array){
    
    if (array.length%2 == 0){ // for arrays which length is even
        for (i = 0; i < array.length; i=i+2){
            [array[i],array[i+1]] = [array[i+1],array[i]] 
        }
    }
    else { // for arrays which length is odd
        for (i = 0; i < array.length-1; i=i+2){
            [array[i],array[i+1]] = [array[i+1],array[i]] 
        }
    }
    
    console.log(array);
    return array;
}

// Excercise 5

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods. 

// Second: Solve this without using any nested loops.

function removeDuplicates(array){
    
    var sortedArray = array.slice().sort();
    var uniqueValuesArray =[];
    
    for (i = 0; i < sortedArray.length; i++){
        if(sortedArray[i+1] != sortedArray[i]){
            uniqueValuesArray.push(sortedArray[i])
        }
    }    
    console.log(uniqueValuesArray);
    return uniqueValuesArray;
}

