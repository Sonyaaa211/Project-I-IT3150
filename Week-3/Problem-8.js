class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}

class FamilyTree {
    constructor() {
        this.nodes = {};
    }

    addRelation(childName, parentName) {
        if (!this.nodes[childName]) {
            this.nodes[childName] = new Node(childName);
        }
        if (!this.nodes[parentName]) {
            this.nodes[parentName] = new Node(parentName);
        }
        this.nodes[parentName].children.push(this.nodes[childName]);
    }

    countDescendants(name) {
        let node = this.nodes[name];
        if (!node) {
            return 0;
        }
        let count = node.children.length;
        for (let child of node.children) {
            count += this.countDescendants(child.name);
        }
        return count;
    }

    countGenerations(name) {
        let node = this.nodes[name];
        if (!node) {
            return 0;
        }
        let maxGenerations = 0;
        for (let child of node.children) {
            maxGenerations = Math.max(maxGenerations, this.countGenerations(child.name));
        }
        return 1 + maxGenerations;
    }
}

function solution(input) {
    let ft = new FamilyTree();
    const lines = input.split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "descendants":
                console.log(ft.countDescendants(query[1]))
                break;
            case "generation":
                console.log(ft.countGenerations(query[1])-1)
                break;
            case "***":
                break;
            default:
                ft.addRelation(query[0], query[1]);
                break;
        }
    }
}

const input = `Peter Newman\nMichael Thomas\nJohn David\nPaul Mark\nStephan Mark\nPierre Thomas\nMark Newman\nBill David\nDavid Newman\nThomas Mark\n***\ndescendants Newman\ndescendants Mark\ndescendants David\ngeneration Mark\n***`;
solution(input);