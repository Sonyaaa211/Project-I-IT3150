project.problemInfo[21] = "Given a string containing only characters (, ), [, ] {, }. Write a program that checks whether the string is correct in expression.\n\n\nExample\n([]{()}()[]): correct\n([]{()]()[]): incorrect"

class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(element){
        if (this.items.length == 0)
        return "Underflow";
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

project.GetLevel = function(c){
    if(c == '{') return -3;
    else if(c == '}') return 3;
    else if(c == '[') return -2;
    else if(c == ']') return 2;
    else if(c == '(') return -1;
    else return 1;
}

project.solution_3_1 = function(text){
    console.log("!hasStack");
    let stack = new Stack();
    console.log("hasStack");
    for(let i = 0; i < text.length; i++){
        if(stack.isEmpty()) stack.push(text[i]);
        else {
            if(project.GetLevel(stack.top()) + project.GetLevel(text[i])==0) stack.pop();
            else stack.push(text[i]);
        }
    }
    if(stack.isEmpty()) return "true";
    else return "false";
}

console.log(solution("(()[][]{}){}{}[][]({[]()})(()[][]{}){}{}[][]({[]()})(()[][]{}){}{}[][]({[]()})(()[][]{}){}{}[][]({[]()})]"));