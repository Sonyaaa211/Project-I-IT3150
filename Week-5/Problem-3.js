

function solution(graph){

    for(let i = 0; i < graph.edges.length; i++){
        let v1 = graph.edges[i][0];
        let v2 = graph.edges[i][1];
        edges[v1][v2] = 1;
        edges[v2][v1] = 1;
    }
    for(let i = 1; i <= graph.vertex; i++){
        if(!visited[i]){
            visited[i] = true;
            q.push(i);
            while(!q.empty()){
                let tmp = q.front();
                q.pop();
                bfs(tmp);
            }
        }
    }
}

function bfs(u){
    console.log(u);
    for(let v = 1; v <= graph.vertex; v++){
        if(edges[u][v] == 1 && !visited[v]){
            visited[v] = true;
            q.push(v);
        }
    }
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

class Queue {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    front(){
        return this.items[0];
    }
    pop() {
        if (this.empty()) {
            console.log(null);
            return;
        }
        return this.items.shift();
    }

    empty() {
        return this.items.length === 0;
    }
}

let graph = new Graph();
graph.vertex = 6;
var visited = new Array(graph.vertex).fill(false);
var edges = [];
for (var i = 0; i <= graph.vertex; i++) {
    var tmp = [];
    for (var j = 0; j <= graph.vertex; j++){
        tmp.push(0); 
    }
    edges.push(tmp);
}
let q = new Queue();
graph.edges = [[2, 4], [1, 3], [3, 4], [5, 6], [1, 2], [3, 5], [2, 3]];
solution(graph);