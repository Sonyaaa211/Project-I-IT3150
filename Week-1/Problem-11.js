/*Given a sequence of integers a1, a2, . . ., an. A k-subsequence is define to be a sequence of k consecutive elements: ai, ai+1, . . ., ai+k-1. The weight of a k-subsequence is the sum of its elements.
Given positive integers k and m. Compute the number Q of k-subsequences such that the weight is even.*/

solution = function(n, k, arr){
    let sum = 0; 
    let newArr = [0];
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        newArr.push(sum);
    }
    let count = 0;
    for(let i = k; i <= n; i++){
        if((newArr[i] - newArr[i-k])%2 === 0) count++;
    }
    console.log(count);
}

solution(6, 3, [2, 4, 5, 1, 1, 2]);