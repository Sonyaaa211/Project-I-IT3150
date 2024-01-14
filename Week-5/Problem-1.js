project.problemInfo[33] = "Hamiton Cycle"

project.isHamiltonian = function(graph, n, mask, u, v) {
    if (mask == (1 << n) - 1) {
        return graph[u][v];
    }

    for (let i = 0; i < n; i++) {
        if ((mask & (1 << i)) == 0 && graph[u][i]) {
            if (project.isHamiltonian(graph, n, mask | (1 << i), i, v)) {
                return true;
            }
        }
    }

    return false;
}

project.solution_5_1 = function(input){
    let lines = input.split("\n");

    let n = parseInt(lines.shift());

    for(let k = 0; k < n; k++){
        let line = lines.shift().split(" ");
        let v = parseInt(line[0]), u = parseInt(line[1]);
        let hamiltonian = 0;
        var graph = [];
        for (var i = 0; i < v; i++) {
            var tmp = [];
            for (var j = 0; j < v; j++){
                tmp.push(0); 
            }
            graph.push(tmp);
        }
        
        for(let i = 0; i < u; i++){
            line = lines.shift().split(" ");
            console.log(line);
            let v1 = parseInt(line[0]) - 1;
            let v2 = parseInt(line[1]) - 1;
            graph[v1][v2] = 1;
            graph[v2][v1] = 1;
        }
        for(let i = 0; i < v; i++){
            if (project.isHamiltonian(graph, v, 1 << i, i, i)) {
                hamiltonian = 1;
                break;
            }
        }

        project.res += hamiltonian + "\n";
    }
    return project.res;
}
class Graph{
    constructor(){
        this.vertex = 0;
        this.edges = [[]];
    }

}