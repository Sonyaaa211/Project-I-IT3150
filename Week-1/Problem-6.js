project.problemInfo[6] = 
"Given an integer n, print numbers from 1 to n and its squares. "

project.solution_1_6 = function(n){
    let result = "";
    for(let i = 1; i<=n; i++){
        result += i.toString() + " " + (i*i).toString() + "\n";
    }
    return result;
}