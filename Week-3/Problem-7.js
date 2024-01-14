project.problemInfo[27] = "Simulation Queue"

class Queue {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "null";
        }
        console.log(this.items[0]);
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

project.solution_3_7 = function(input) {
    let queue = new Queue();
    const lines = input.split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "PUSH":
                let a = Number(query[1]);
                queue.push(a)
                break;
            case "POP":
                project.res += queue.pop() + "\n";
                break;
            default:
                break;
        }
    }
    return project.res;
}

const input = `PUSH 1\nPUSH 2\nPUSH 3\nPOP\nPOP\nPUSH 4\nPUSH 5\nPOP\n#`;
solution(input);