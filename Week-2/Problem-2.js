project.problemInfo[16] = 
"Given an integer n, write a program that generates all the binary sequences of length n in a lexicographic order.";
project.backtracking22 = function(k){
    for(let i = 0; i <= 1; i++){
        if(1){
            project.arr[k] = i;
            if(k == project.n-1) project.res += project.arr.map(x =>{return x.toString()}).join("") + "\n";
            else project.backtracking22(k+1);
        } 
    }
}

project.solution_2_2 = function(x){
    project.n = parseInt(x);
    project.backtracking22(0);
    return project.res;
}