// Definition of a node of a Binary tree
class Node {
    key = '';
    left = null;
    right = null;

    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    root = null;

    constructor(key) {
        this.root = new Node(key);
    }
}

const myTree = new BinaryTree(1);
console.log('########### Tree Root ###########')
console.log(myTree.root);
console.log('#################################');
const root = myTree.root;
root.left = new Node(2);
root.right = new Node(3);
console.log("############## Tree Children ##################");
console.log(root.left);
console.log(root.right);
console.log("#################################");
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log("############## Tree Leaves ##################");
console.log(root.left.left);
console.log(root.left.right);
console.log(root.right.left);
console.log(root.right.right);
console.log("#################################");
