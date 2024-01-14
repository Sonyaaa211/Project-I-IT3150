project.problemInfo[2] = 
"Given a positive integer n, find all integer having 3 digits which is divisible by n.";

project.solution_1_2 = function(input){
    let res = "";
    let n = parseInt(input);
    if(n>0){
        let tmp = n;
        while(tmp < 1000){
            if(tmp > 99) res += tmp.toString() + "\n";
            tmp += n;
        }
    }
    return res;
}