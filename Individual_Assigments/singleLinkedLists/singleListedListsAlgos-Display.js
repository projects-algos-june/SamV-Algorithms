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

    // Display mehtod
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

// Creating a SLL with 10 nodes from 1 to 10 with values 1,2,3,4,5,6,7,8,9,10

var list = new singleLinkedList();
for (i = 10; i > 0; i--){
    list.addFront(i)
}
console.log(list)
list.display()

