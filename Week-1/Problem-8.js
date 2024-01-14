project.problemInfo[8] = 
"Given 2 integers a and b. Compute a+b, a-b, a*b, a/b.\nExamle input:\n24 13";

project.solution_1_8 = function(input){
    const lines = input.split(' ');
    let a = lines[0], b = lines[1];
    return (a + b).toString() + " " + (a - b).toString() + " " + (a * b).toString() + " " + (parseInt(a/b)).toString();
}