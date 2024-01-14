project.problemInfo[7] = 
"Given a sequence of integer a1, a2, ..., an. Count the number of odd elements and even elements of the sequence."

project.solution_1_7 = function(input){
    const lines = input.split('\n');
    lines.shift();
    arr = lines.map(x => {return parseInt(x)});
    const even = arr.filter(x =>{return x%2 === 0});
    return even.length.toString() + " " + (arr.length-even.length).toString();
}