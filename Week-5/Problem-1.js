function isHamiltonian(graph, n, mask, u, v) {
    if (mask == (1 << n) - 1) {
        return graph[u][v];
    }

    for (let i = 0; i < n; i++) {
        if ((mask & (1 << i)) == 0 && graph[u][i]) {
            if (isHamiltonian(graph, n, mask | (1 << i), i, v)) {
                return true;
            }
        }
    }

    return false;
}

function solution(graphs){
    graphs.forEach(element => {
        let hamiltonian = 0;
        const n = element.vertex;
        var graph = [];
        for (var i = 0; i < n; i++) {
            var tmp = [];
            for (var j = 0; j < n; j++){
                tmp.push(0); 
            }
            graph.push(tmp);
        }
        
        for(let i = 0; i < element.edges.length; i++){
            let v1 = element.edges[i][0] - 1;
            let v2 = element.edges[i][1] - 1;
            graph[v1][v2] = 1;
            graph[v2][v1] = 1;
        }
        for(let i = 0; i < n; i++){
            if (isHamiltonian(graph, n, 1 << i, i, i)) {
                hamiltonian = 1;
                break;
            }
        }

        console.log(hamiltonian);
    });
}
class Graph{
    constructor(){
        this.vertex = 0;
        this.edges = [[]];
    }

}
let graph1 = new Graph();
graph1.vertex = 5;
graph1.edges = [[1, 2], [1, 3], [2, 4], [2, 5], [3, 5]];
let graph2 = new Graph();
graph2.vertex = 7;
graph2.edges = [[1, 3], [1, 5], [1, 7], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 7], [4, 6], [4, 7], [5, 7], [6, 7]];
let graphs = [];
graphs.push(graph1);
graphs.push(graph2);
solution(graphs);