/*Given a string containing only characters (, ), [, ] {, }. Write a program that checks whether the string is correct in expression.
Example
 ([]{()}()[]): correct
 ([]{()]()[]): incorrect*/

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

function GetLevel(c){
    if(c == '{') return -3;
    else if(c == '}') return 3;
    else if(c == '[') return -2;
    else if(c == ']') return 2;
    else if(c == '(') return -1;
    else return 1;
}

function solution(text){
    let stack = new Stack();
    for(let i = 0; i < text.length; i++){
        if(stack.isEmpty()) stack.push(text[i]);
        else {
            if(GetLevel(stack.top()) + GetLevel(text[i])==0) stack.pop();
            else stack.push(text[i]);
        }
    }
    if(stack.isEmpty()) return true;
    else return false;
}

console.log(solution("(()[][]{}){}{}[][]({[]()})(()[][]{}){}{}[][]({[]()})(()[][]{}){}{}[][]({[]()})(()[][]{}){}{}[][]({[]()})]"));