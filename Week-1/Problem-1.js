project.problemInfo[1] = 
"Given a sequence of integers a1, a2, ..., an. Compute the sum Q of elements of this sequence.\nInput:\n5\n2\n3\n4\n1\n2"
window.project = window.project || {};

project.solution_1_1 = function(input){
    const lines = input.split('\n');
    let sum = 0;
    for(let i = 1; i<lines.length; i++){
        sum += parseInt(lines[i]);
    }
    return sum;
}