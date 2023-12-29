/*Given an integer n, write a program that generates all binary sequences without consecutive 11 in a lexicographic order.*/
let res = [];
let n;
function check(c, k){
    if(k == 0) return true;
    if(c === 1 && res[k-1] === 1) return false;
    return true;
}

function backtracking(k){
    for(let i = 0; i <= 1; i++){
        if(check(i, k)){
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