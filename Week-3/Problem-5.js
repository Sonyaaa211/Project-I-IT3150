class Node {
    constructor(id) {
        this.id = id;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.nodes = {};
    }

    makeRoot(id) {
        this.root = new Node(id);
        this.nodes[id] = this.root;
    }

    insert(u, v) {
        if (this.nodes[v] && !this.nodes[u]) {
            let newNode = new Node(u);
            this.nodes[v].children.push(newNode);
            this.nodes[u] = newNode;
        }
    }

    preOrder(node, result = []) {
        if (!node) return;
        result.push(node.id);
        for (let child of node.children) {
            this.preOrder(child, result);
        }
        return result;
    }

    inOrder(node, result = []) {
        if (!node) return;
        let mid = Math.floor(node.children.length / 2);
        for (let i = 0; i < mid; i++) {
            this.inOrder(node.children[i], result);
        }
        result.push(node.id);
        for (let i = mid; i < node.children.length; i++) {
            this.inOrder(node.children[i], result);
        }
        return result;
    }

    postOrder(node, result = []) {
        if (!node) return;
        for (let child of node.children) {
            this.postOrder(child, result);
        }
        result.push(node.id);
        return result;
    }
}

function solution(input) {
    let tree = new Tree();
    const lines = input.split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "MakeRoot":
                let a = Number(query[1]);
                tree.makeRoot(a)
                break;
            case "Insert":
                let b = Number(query[1]);
                let c = Number(query[2]);
                tree.insert(b, c);
                break;
            case "PreOrder":
                console.log(tree.preOrder(tree.root));
                break;
            case "InOrder":
                console.log(tree.inOrder(tree.root));
                break;
            case "PostOrder":
                console.log(tree.postOrder(tree.root));
                break;
            default:
                break;
        }
    }
}

const input = `MakeRoot 10\nInsert 11 10\nInsert 1 10\nInsert 3 10\nInsert 5 11\nInsert 4 11\nInsert 8 3\nInsert 2 3\nInsert 7 3\nInsert 6 4\nInsert 9 4\nInOrder \nPostOrder\nPreOrder\n*`;
solution(input);