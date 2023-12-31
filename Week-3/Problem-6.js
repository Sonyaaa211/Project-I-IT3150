/*Perform a sequence of operations over a stack, each element is an integer:
PUSH v: push a value v into the stack
POP: remove an element out of the stack and print this element to stdout (print NULL if the stack is empty)*/

 class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if (this.items.length == 0)
            return "Underflow";
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

function solution(input) {
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
                stack.pop();
                break;
            default:
                break;
        }
    }
}

const input = `PUSH 1\nPUSH 2\nPUSH 3\nPOP\nPOP\nPUSH 4\nPUSH 5\nPOP\n#`;
solution(input);