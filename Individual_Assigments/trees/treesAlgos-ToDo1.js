// =========================================================================================
// TREE NODE AND BINARY SEARCH TREE CLASSES
// =========================================================================================

//tree node class
class treeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
// binary search tree class
class binarySearchTree {
    // Constructor for object with root equal to null
    constructor() {
      this.root = null;
    }
    // =============================================================
    // YOUR CODE HERE
    // =============================================================
    
    // Add Method
    // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

    add(val, root = this.root){
        
    }

    // Contains Method
    // Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

    // Min Method
    // Create a min() method on the BST class that returns the smallest value found in the BST.

    // Max Method
    // Create a max() BST method that returns the largest value contained in the binary search tree.

    // Size Method
    // Write a size() method that returns the number of nodes (values) contained in the tree.

    // Is Empty Method
    // Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
    
    
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
