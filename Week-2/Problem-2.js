/*Given an integer n, write a program that generates all the binary sequences of length n in a lexicographic order.*/
let res = [];
let n;

function backtracking(k){
    for(let i = 0; i <= 1; i++){
        if(1){
            res[k] = i;
            if(k == n-1) console.log(res);
            else backtracking(k+1);
        } 
    }
}

solution = function(x){
    n = x;
    backtracking(0);
}

solution(3);