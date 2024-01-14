project.problemInfo[18] = 
"Given an integer n, write a program to generate all permutations of 1, 2, ..., n in a lexicalgraphic order (elements of a permutation are separated by a SPACE character)."

project.backtracking24 = function(k){
    for(let i = 1; i <= project.n; i++){
        if(!project.check[i]){
            project.arr[k] = i;
            project.check[i] = true;
            if(k == project.n-1) project.res += project.arr.map(x =>{return x.toString()}).join("") + "\n";
            else project.backtracking24(k+1);
            project.check[i] = false;
        } 
    }
}

project.solution_2_4 = function(x){
    project.n = parseInt(x);
    project.backtracking24(0);
    return project.res;
}