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
    constructor(value){
        this.head = new node(value)
    }
    // =============================================================
    // YOUR CODE HERE
    // =============================================================
    
    // Add Front Method
    
    addFront(val){
        if (this.head === null){
            this.head = new node(val);
        }
        else{
            let temp = this.head;
            this.head = new node(val);
            this.head.next = temp;
        }
    }
    
    contains(value) {
        var runner = this.head;
        while(runner) {
            if(runner.value == value) {
                return true
            }
            runner = runner.next
        }
        return false
    }

}


//=========================================================================================
// REVIEWING METHOD ANSWERS
// =========================================================================================

var waitingLine = new singleLinkedList();
waitingLine.addFront("Peter")
waitingLine.addFront("Sam")
waitingLine.addFront("Susan")
waitingLine.addFront("Michael")
waitingLine.addFront("Jeff")
waitingLine.addFront("Tadd")
waitingLine.addFront("Ryan")

console.log(" ")
console.log("Tadd is on the current waiting List? ", waitingLine.contains("Tadd"),"\n")
console.log("Mary is on the current waiting List? ",waitingLine.contains("Mary"),"\n")