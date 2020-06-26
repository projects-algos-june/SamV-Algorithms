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
        this.size++;
    }

    // Lenght Method - return the 
    length() {
        var runner = this.head;
        var numberOfNodes = 0
        while(runner) { // counts nodes of the list until the last node
            numberOfNodes += 1;
            runner=runner.next
        }
        return numberOfNodes
    }
    
}


//=========================================================================================
// REVIEWING METHOD ANSWERS
// =========================================================================================

var list = new singleLinkedList();
for (i = 5000; i >= 1; i--){
    list.addFront(i)
}

console.log("")

console.log("The numbers of Nodes in the current SLL is: ", list.length(), "\n")
