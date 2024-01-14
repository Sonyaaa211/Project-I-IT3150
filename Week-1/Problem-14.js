project.problemInfo[14] = 
"Given an equation ax^2 + bx + c = 0. Find solution to the given equation.\nExample input:\n1 2 3";

window.project = window.project || {};
project.solution_1_14 = function(input) {
    const lines = input.split(" ");
    let a = parseInt(lines[0]);
    let b = parseInt(lines[1]);
    let c = parseInt(lines[2]);
    if(a === 0){
        if(b == 0) return "NO SOLUTION";
        else return c/b;
    }
    else{
        const delta = b*b - 4 * a * c;
        if(delta < 0) return "NO SOLUTION";
        else if(delta == 0) return -b/(2*a);
        else {
            return (-b-Math.sqrt(delta))/(2*a).toString() + " " + (-b+Math.sqrt(delta))/(2*a).toString();
        }
    }
}