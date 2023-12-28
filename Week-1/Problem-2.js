/*
Given a positive integer n, find all integer having 3 digits which is divisible by n.
*/

solution = function(n = 1){
    if(n>0){
        let tmp = n;
        while(tmp < 1000){
            if(tmp > 99) console.log(tmp);
            tmp += n;
        }
    }
}

solution(200);