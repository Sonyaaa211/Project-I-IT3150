project.problemInfo[35] = "Sequence of nodes visited by BFS"

project.solution_5_3 = function(input){
    project.q = new Queue();
    let lines = input.split("\n");
    let line = lines.shift().split(" ");
    project.v = parseInt(line[0]);
    let e = parseInt(line[1]);
    project.visited = new Array(project.v + 1).fill(false);
    
    for (var i = 0; i <= project.v; i++) {
        var tmp = [];
        for (var j = 0; j <= project.v; j++){
            tmp.push(0); 
        }
        project.edges.push(tmp);
    }

    for(let i = 0; i < e; i++){

        line = lines.shift().split(" ");
        let v1 = parseInt(line[0]) - 1;
        let v2 = parseInt(line[1]) - 1;
        project.edges[v1][v2] = 1;
        project.edges[v2][v1] = 1;
    }
    for(let i = 1; i <= project.v; i++){
        if(!project.visited[i]){
            project.visited[i] = true;
            project.q.push(i);
            while(!project.q.empty()){
                let tmp = project.q.front();
                project.q.pop();
                project.bfs(tmp);
            }
        }
    }
    return project.res;
}

project.q = new Queue();

project.bfs = function(u){
    project.res += u + " ";
    for(let v = 1; v <= project.v; v++){
        if(project.edges[u-1][v-1] == 1 && !project.visited[v]){
            project.visited[v] = true;
            project.q.push(v);
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
