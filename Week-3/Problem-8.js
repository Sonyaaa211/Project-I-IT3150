project.problemInfo[28] = "Family tree"

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

project.solution_3_8 = function(input) {
    let ft = new FamilyTree();
    const lines = input.split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "descendants":
                project.res += ft.countDescendants(query[1]) + "\n";
                break;
            case "generation":
                project.res += ft.countGenerations(query[1])-1 + "\n";
                break;
            case "***":
                break;
            default:
                ft.addRelation(query[0], query[1]);
                break;
        }
    }
    return project.res;
}

const input = `Peter Newman\nMichael Thomas\nJohn David\nPaul Mark\nStephan Mark\nPierre Thomas\nMark Newman\nBill David\nDavid Newman\nThomas Mark\n***\ndescendants Newman\ndescendants Mark\ndescendants David\ngeneration Mark\n***`;