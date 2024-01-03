

function solution(graph){

    for(let i = 0; i < graph.edges.length; i++){
        let v1 = graph.edges[i][0];
        let v2 = graph.edges[i][1];
        edges[v1][v2] = 1;
        edges[v2][v1] = 1;
    }
    dfs(1);
}

function dfs(u){
    console.log(u);
    visited[u] = true;
    for(let v = 1; v <= graph.vertex; v++){
        if(edges[u][v] == 1 && !visited[v]){
            dfs(v);
        }
    }
}

class Graph{
    constructor(){
        this.vertex = 0;
        this.edges = [[]];
    }
}

let graph = new Graph();
graph.vertex = 7;
var visited = new Array(graph.vertex).fill(false);
var edges = [];
for (var i = 0; i <= graph.vertex; i++) {
    var tmp = [];
    for (var j = 0; j <= graph.vertex; j++){
        tmp.push(0); 
    }
    edges.push(tmp);
}
graph.edges = [[1, 2], [1, 3], [2, 3], [2, 4], [2, 7], [3, 5], [3, 7], [4, 5], [4, 6], [4, 7], [5, 6], [5, 6]];
solution(graph);