project.problemInfo[22] = "There are two jugs, a-litres jug and b-litres jug (a, b are positive integers). \nThere is a pump with unlimited water. Given a positive integer c, how to get exactly c litres.\n\n\nExample input:\n\n536 978 24"

project.gcd = function(a, b){
    if(b == 0){
        return a;
    }
    return project.gcd(b, a%b);
}

project.solution_3_2 = function(input){
    let lines = input.split(" ");
    let a = parseInt(lines[0]), b = parseInt(lines[1]), c = parseInt(lines[2]);
    if (c > Math.max(a, b) || c % project.gcd(a, b) != 0) return -1;
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