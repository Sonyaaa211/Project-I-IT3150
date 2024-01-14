project.problemInfo[26] = "Perform a sequence of operations over a stack, each element is an integer:\n\nPUSH v: push a value v into the stack\nPOP: remove an element out of the stack and print this element to stdout (print NULL if the stack is empty)"

 class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if (this.items.length == 0)
            return "NULL";
        console.log(this.top());
        return this.items.pop();
    }

    top(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    printStack(){
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

project.solution_3_6 = function(input) {
    let stack = new Stack();
    const lines = input.split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "PUSH":
                let a = Number(query[1]);
                stack.push(a)
                break;
            case "POP":
                project.res += stack.pop().toString() + "\n";
                break;
            default:
                break;
        }
    }
    return project.res;
}

const input = `PUSH 1\nPUSH 2\nPUSH 3\nPOP\nPOP\nPUSH 4\nPUSH 5\nPOP\n#`;