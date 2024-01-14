project.problemInfo[39] = "Max Flow"

project.solution_6_3 = function(input) {
    let lines = input.split("\n");
    let line = lines.shift().split(" ");
    project.v = parseInt(line[0]);
    let e = parseInt(line[1]);
    let adj = Array.from(Array(project.v), () => Array(project.v).fill(0));
    for(let i = 0 ; i < e; i++){
        line = lines.shift().split(" ");
        let v1 = parseInt(line[0]);
        let v2 = parseInt(line[1]);
        let w = parseInt(line[2]);
        adj[v1-1][v2-1] = w;
    }

    function bfs(parent) {
        let visited = Array(project.v+1).fill(false);
        let queue = [s-1];
        visited[s-1] = true;
        while(queue.length) {
            let u = queue.shift();
            for(let v = 0; v < project.v; v++) {
                if(!visited[v] && adj[u][v] > 0) {
                    queue.push(v);
                    parent[v] = u;
                    visited[v] = true;
                }
            }
        }
        return visited[t-1];
    }
    line = lines.shift().split(" ");
    let s = line[0];
    let t = line[1];
    let parent = Array(project.v);
    let maxFlow = 0;
    while(bfs(parent)) {
        let pathFlow = Infinity;
        for(let v = t-1; v != s-1; v = parent[v]) {
            let u = parent[v];
            pathFlow = Math.min(pathFlow, adj[u][v]);
        }
        for(let v = t-1; v != s-1; v = parent[v]) {
            let u = parent[v];
            adj[u][v] -= pathFlow;
            adj[v][u] += pathFlow;
        }
        maxFlow += pathFlow;
    }
    return maxFlow;
}
