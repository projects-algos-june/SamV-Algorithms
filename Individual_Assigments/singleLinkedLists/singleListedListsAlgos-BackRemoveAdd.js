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
    }
    // Remove Front Method
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if (this.head === null) {
          return "list is empty";
        } else {
          this.head = this.head.next;
        }
      }

    // Front Method
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    
    front(){
        return this.head.value
    }

    // Back Method
    // Create a function that accepts a ListNode pointer and returns the last value in the list.

    back(){
        return this.head.value
    }

    // Remove Back Method
    // Create a standalone function that removes the last ListNode in the list and returns the new list.

    // Add Back Method
    // Create a function that creates a ListNode with given value and inserts it at end of a linked list.

}


//=========================================================================================
// REVIEWING METHOD ANSWERS
// =========================================================================================

var list = new singleLinkedList(1);
list.addFront(99)
list.removeFront()

console.log(" ")
console.log("This is the current SLL: ", list, "\n")
console.log("This is the first value of the current SLL: ",list.front() )