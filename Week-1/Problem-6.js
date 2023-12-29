/*
Given an integer n, print numbers from 1 to n and its squares. 
*/
solution = function(n){
    for(let i = 1; i<=n; i++){
        console.log(i.toString() + " " + (i*i).toString());
    }
}
solution(3);