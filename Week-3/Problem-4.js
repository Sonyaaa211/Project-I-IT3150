project.problemInfo[24] = "Given a BST initialized by NULL. Perform a sequence of operations on a BST including:\ninsert k: insert a key k into the BST (do not insert if the key k exists)"

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (newNode.data > node.data) {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    preOrder(node) {
        if (node) {
            project.res += node.data.toString() + " ";
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
}

project.solution_3_4 = function(input) {
    let bst = new BST();
    const lines = input.split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "insert":
                let a = Number(query[1]);
                bst.insert(a)
                break;
            default:
                break;
        }
    }
    bst.preOrder(bst.root);
    return project.res;
}
const input = `insert 20\ninsert 10\ninsert 26\ninsert 7\ninsert 15\ninsert 23\ninsert 30\ninsert 3\ninsert 8`;
solution(input);