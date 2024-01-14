project.problemInfo[11] = "Given a sequence of integers a1, a2, . . ., an. A k-subsequence is define to be a sequence of k consecutive elements: ai, ai+1, . . ., ai+k-1. The weight of a k-subsequence is the sum of its elements.\nGiven positive integers k and m. \nCompute the number Q of k-subsequences such that the weight is even."

project.solution_1_11 = function(input){
    const lines = input.split("\n");
    let tmp = lines.shift();
    let n = tmp[0], k = tmp[1];

    arr = arr.map(x => {return parseInt(x)});
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
    return count;
}
