// =========================================================================================
// TREE NODE AND BINARY SEARCH TREE CLASSES
// =========================================================================================

//tree node class
class treeNode {
    constructor(val) {
      this.value = val;
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
    
    // 1) Add Method
    // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

    add(val){
        // If the tree is empty, new node being added would be the root
        if(this.root == null){
            this.root = new treeNode(val);
            return this;
        }

        // If the root is not empty, then decide where to add the new tree node. A axuiliar variable runner is used to traverse the tree
        var runner = this.root
        while(runner){
            // Traversing to the left
            if(val < runner.value){
                // If there is already other node to the LEFT, then continue traversing
                if(runner.left){
                    runner=runner.left;
                }
                // If there is no node to LEFT then add new node to this side
                else{
                    runner.left = new treeNode(val);
                    return this;
                }
            }
            // Traversing to the right
            else{
                // If there is already other node to the RIGHT, then continue traversing
                if(runner.right){
                    runner=runner.right;
                }
                // If there is no node to RIGHT then add new node to this side
                else{
                    runner.right = new treeNode(val);
                    return this;
                }
            }
        }
    }

    // 2) Contains Method
    // Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

    contains(val){
        // If the tree is empty, then we return "false" (the value is not contained in the object)
        if(this.root == null){
            return false;
        }
        // If the tree is not empty, then we traverse the tree for checking if the value is contained. A axuiliar variable runner is used
        var runner = this.root
        while(runner){
            // if value of the runner matchs with the value looked in the tree then we return "true"
            if(val == runner.value){
                return true;
            }
            // if the value of the runner does not match, then we continue traversing
            // Traversing to the left:
            if (val < runner.value){
                // If there is already other node to the LEFT, then continue traversing
                if(runner.left){
                    runner=runner.left;
                }
                // If there is no node to LEFT, it means that the value was not finded on the tree
                else{
                    return false;
                }
            }
            // Traversing to the right:
            else {
                // If there is already other node to the RIGHT, then continue traversing
                if(runner.right){
                    runner=runner.right;
                }
                // If there is no node to RIGHT, it means that the value was not finded on the tree
                else{
                    return false;
                }
            }
        }
    }

    // 3) Min Method
    // Create a min() method on the BST class that returns the smallest value found in the BST.

    min(){
        
        // We traverse the tree using and axuiliar variable named runner
        var runner = this.root;
        // Additionaly the min value is instanciated at the begginig with the value of the root
        var min = this.root.value;
        
        // The tree is traversed to LEFT for finding the min value (Binary search trees has always its lower values  to the left of the parent node)
        while(runner.left){
            // if the value finded is lower than the current value of min, then min value is updated with the value finded
            if(runner.left.value < min){
                min = runner.left.value; 

            }
            // if the value finded is higher than the current value of min, then continue traversing
            else{
                runner = runner.left;
            }
        }
        // When finishing traversing the tree we return the min value finded
        return min;
    }

    // 4) Max Method
    // Create a max() BST method that returns the largest value contained in the binary search tree.

    max(){
        
        // We traverse the tree using and axuiliar variable named runner
        var runner = this.root;
        // Additionaly the max value is instanciated at the begginig with the value of the root
        var max = this.root.value;
        
        // The tree is traversed to RIGHT for finding the max value (Binary search trees has always its higher values to the right of the parent node)
        while(runner.right){
            // if the value finded is higher than the current value of max, then min value is updated with the value finded
            if(runner.right.value > max){
                max = runner.right.value; 

            }
            // if the value finded is lower than the current value of max, then continue traversing
            else{
                runner = runner.right;
            }
        }
        // When finishing traversing the tree we return the max value finded
        return max;
    }

    // 5) Size Method
    // Write a size() method that returns the number of nodes (values) contained in the tree.

    size(){
        // If the tree is empty, then we return 0
        if(this.root == null){
            return 0;
        }
        // If the tree is not empty, then we traverse the tree for checking if the value is contained. A axuiliar variable runner is used
        var runner = this.root
        // Additionaly the variable size is instanciate begginig with the value 0
        var size = 0
        // A recursive function is used for counting how many nodes there are
        function counting(runner){
            // base case -> the runner is a null node
            if(runner == null){
                return 0;
            }
            // recursive case -> the runner is not a null node
            else{
                size = 1 + counting(runner.left) + counting(runner.right);
                return size;
            }
        }
        // Recursive Function is called
        return counting(runner)
       
    }
    // 6) Is Empty Method
    // Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
    
    isEmpty(){
        if(this.root){
            return false;
        }
        return true;
    }
}


//=========================================================================================
// REVIEWING METHOD ANSWERS
// =========================================================================================

var tree = new binarySearchTree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(0);

console.log("")
console.log("Checking Add Method")
console.log(tree) // should return a tree with following stricture:
//    1
//  0   2
//        3
console.log("\n")

console.log("Checking Contains Method")
console.log("The value 5 is contained in the current tree?", tree.contains(5)) // should return false
console.log("The value 0 is contained in the current tree?", tree.contains(0)) // should return true
console.log("\n")

console.log("Checking Min Method")
console.log("The min value of the current tree:", tree.min()) // should return 0
console.log("\n")

console.log("Checking Min Method")
console.log("The max value of the current tree:", tree.max()) // should return 3
console.log("\n")

console.log("Checking Size Method")
console.log("The size of the current tree:", tree.size()) // should return 4
console.log("\n")

console.log("Checking iSempty Method")
console.log("The current tree us empty?", tree.isEmpty()) // should return false
console.log("\n")