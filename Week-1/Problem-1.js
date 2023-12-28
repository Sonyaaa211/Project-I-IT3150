/*
Given a sequence of integers a1, a2, ..., an. Compute the sum Q of elements of this sequence.
*/
solution = function(arr = [], n = 0){
    let sum = 0;
    for(let i = 0; i<n; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(solution([3, 2, 5, 4], 4));