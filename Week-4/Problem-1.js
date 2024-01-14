project.problemInfo[29] = "Hash Over Strings"

project.solution_4_1 = function(input) {
    let lines = input.split("\n");
    let inputNum = lines.shift().split(" ");
    let n = inputNum[0], m = inputNum[1];
    console.log(m);
    console.log(lines);
    for (let i = 0; i < n; i++) {
        let s = lines[i];
        let k = s.length;
        let hashCode = 0;
        for (let j = 0; j < k; j++) {
            hashCode = (hashCode * 256 + s.charCodeAt(j)) % m;
        }
        project.res += hashCode +"\n";
    }
    return project.res;
}
