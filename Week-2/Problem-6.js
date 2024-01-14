project.problemInfo[20] = "Given a fibonacci sequence a[0], a[1], a[2], ... in which:  a[0] = 0, a[1] = 1, a[n] = a[n-1] + a[n-2], for all n >= 2 Given  positive integer n, compute a[n-1]."

project.solution_2_6 = function(input){
    let n = parseInt(input);
    let arr =[0, 1];
    if(n<2) return 1;
    else{
        for(let i = 2; i < n; i++){
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    return arr[n-1];
}