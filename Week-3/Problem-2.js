/*There are two jugs, a-litres jug and b-litres jug (a, b are positive integers). There is a pump with unlimited water. Given a positive integer c, how to get exactly c litres.*/

function gcd(a, b){
    if(b == 0){
        return a;
    }
    return gcd(b, a%b);
}

function solution(a, b, c){
    if (c > Math.max(a, b) || c % gcd(a, b) != 0) return -1;
    else {
        let steps = 0;
        let x = 0, y = 0;

        while(x != c && y!= c){
            if(x == 0){
                x = a;
                steps++;
            } else if(y == b){
                y = 0;
                steps++;
            } else {
                let pour = Math.min(x, b-y);
                x -= pour;
                y += pour;
                steps++;
            }
        }

        return steps;
    }
}

console.log(solution(536, 978, 24));