project.problemInfo[17] = 
"Given an integer n, write a program that generates all binary sequences without consecutive 11 in a lexicographic order."
project.check23 = function(c, k){
    if(k == 0) return true;
    if(c === 1 && project.arr[k-1] === 1) return false;
    return true;
}

project.backtracking23 = function(k){
    for(let i = 0; i <= 1; i++){
        if(project.check23(i, k)){
            project.arr[k] = i;
            if(k == project.n-1) project.res += project.arr.map(x =>{return x.toString()}).join("") + "\n";
            else project.backtracking23(k+1);
        } 
    }
}

project.solution_2_3 = function(x){
    project.n = parseInt(x);
    project.backtracking23(0);
    return project.res;
}