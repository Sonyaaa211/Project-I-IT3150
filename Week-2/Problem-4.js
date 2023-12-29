/*Given an integer n, write a program to generate all permutations of 1, 2, ..., n in a lexicalgraphic order 
(elements of a permutation are separated by a SPACE character).*/
let res = [];
let check = []
let n;

function backtracking(k){
    for(let i = 1; i <= n; i++){
        if(!check[i]){
            res[k] = i;
            check[i] = true;
            if(k == n-1) console.log(res);
            else backtracking(k+1);
            check[i] = false;
        } 
    }
}

solution = function(x){
    n = x;
    backtracking(0);
}

solution(3);