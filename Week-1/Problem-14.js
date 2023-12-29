/*Given an equation ax^2 + bx + c = 0. Find solution to the given equation.*/

solution = function(a, b, c){
    if(a === 0){
        if(b == 0) return "NO SOLUTION";
        else return c/b;
    }
    else{
        const delta = b*b - 4 * a * c;
        if(delta < 0) return "NO SOLUTION";
        else if(delta == 0) return -b/(2*a);
        else {
            return (-b-Math.sqrt(delta))/(2*a).toString() + " " + (-b+Math.sqrt(delta))/(2*a).toString();
        }
    }
}

console.log(solution(1, -7, 10));