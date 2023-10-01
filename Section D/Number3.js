class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

        this.isThreaded = false;
    }
}

function createThreadedTree(root) {
    let prev = null;

    function inOrderThread(node) {
        if (!node) return;

      
        inOrderThread(node.left);

        if (prev !== null && prev.right === null) {
            prev.right = node;
            prev.isThreaded = true;
        }

        // Update previous node and move to right subtree
        prev = node;
        inOrderThread(node.right);
    }

    inOrderThread(root);
}

// In-order traversal
function inOrderTraverse(root) {
    let current = getLeftMostNode(root);
    while (current !== null) {
        console.log(current.value);

        if (current.isThreaded) {
            current = current.right;
        } else {
            current = getLeftMostNode(current.right);
        }
    }
}

function getLeftMostNode(node) {
    if (!node) return null;

    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

// Example:
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

createThreadedTree(root);
inOrderTraverse(root);  //
