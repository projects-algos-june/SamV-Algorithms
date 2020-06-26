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
    // Remove Front Method
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if (this.head === null) {
          return "list is empty";
        } else {
          this.head = this.head.next;
        }
        this.size--;
      
    }

    // Front Method
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    
    front(){
        if (this.head != null){
            return this.head.value
        }
            return null;
        
    }

    // Back Method
    // Create a function that accepts a ListNode pointer and returns the last value in the list.

    back(){
        let runner = this.head;
        if (this.head != null){
            while(runner.next){ // Traverse until the last node (node that has as null the next adjacent node)
                runner = runner.next
            }
            return runner.value // return value of last node
        }
        return null; // return null if the list is empty
    }

    // Remove Back Method
    // Create a standalone function that removes the last ListNode in the list and returns the new list.

    removeBack(){
        let runner = this.head;
        if (this.head == null){ // Check if SLL is empty. If it is then return the same SLL with no changes
            return this
        }
        else{
            if (this.head.next == null){ // Check if the SSL is composed only one node. If it is then we remove the head
                this.head = null
            }
            else{ // if the SLL has more than one node, then:
                while(runner.next.next){ // Traverse the SLL until the second-to-last node
                    runner = runner.next;
                }
                runner.next = null; // remove last node
            }
            return this
        }
    }

    // Add Back Method
    // Create a function that creates a ListNode with given value and inserts it at end of a linked list.

    addBack(val){
        let runner = this.head;
        while(runner.next){ // Traverse the SLL until the last node
            runner = runner.next;
        }
        runner.next = new node(val); // add new node
        return this
    }

    // Display Method
    display() {
        let i = 0
        let current = this.head;
        let str = "";
        if (current == null){
            str = "singleLinkedList { head: "+null+ "}";
            console.log(str)
        }
        else{
            str = "singleLinkedList { head: node { value: ";
            while (current) {
                if (current.next != null){
                    str += current.value + ", next: node {value: " ;
                }
                else {
                    str += current.value + ", next: " + null;   
                }
                current = current.next;
                i++;
            }
            str += " }".repeat(i) + " }"
            console.log(str);
        }
        
    }

}


//=========================================================================================
// REVIEWING METHOD ANSWERS
// =========================================================================================

var list = new singleLinkedList();
list.addFront(1);
list.addBack(2);
list.addBack(3);
list.addBack(4);
list.addFront(0);
console.log(list.back()); // should print 4
list.removeBack();
list.display() // should print a SLL with 4 nodes, each with the consecutive values 0,1,2,3

