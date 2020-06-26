// =========================================================================================
// NODE AND SINGLE LISTED LINK CLASSES
// =========================================================================================

//node class
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// single linked list class
class singleLinkedList{
    // constructor accepts value to create head node
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // =============================================================
    // YOUR CODE HERE
    // =============================================================
    
    // Add Front Method
    // Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(val){
        if (this.head === null){
            this.head = new node(val);
        }
        else{
            let temp = this.head;
            this.head = new node(val);
            this.head.next = temp;
        }
        this.size++
    }
    // Max Method
    max(){
        var runner = this.head;
        let max = this.head.value
        while(runner) { // counts nodes of the list until the last node
            if(runner.value > max){
                max = runner.value
            }
            runner = runner.next
        }
        return max; 
    }

    // Min Method
    min(){
        var runner = this.head;
        let min = this.head.value
        while(runner) { // counts nodes of the list until the last node
            if(runner.value < min){
                min = runner.value
            }
            runner = runner.next
        }
        return min; 
    }

    // Avg Method
    avg(){
        var runner = this.head;
        let sum = this.head.value
        while(runner) { // counts nodes of the list until the last node
            sum += runner.value
            runner = runner.next
        }
        let avg = sum/this.size
        return avg; 
    }

}


//=========================================================================================
// REVIEWING METHOD ANSWERS
// =========================================================================================

var list = new singleLinkedList();
list.addFront(3)
list.addFront(15)
list.addFront(5)
list.addFront(8)
list.addFront(10)
list.addFront(13)


console.log(" ")
console.log("This is the current SLL: ", list, "\n")
console.log("The largest value on the SLL is: ",list.max())
console.log("The smallest value on the SLL is: ",list.min())
console.log("The avarage value on the SLL is: ",list.avg())