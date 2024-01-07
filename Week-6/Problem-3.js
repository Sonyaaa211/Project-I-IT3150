/*Max Flow*/

function MaxFlow(s, t, edges, n) {
    let adj = Array.from(Array(n), () => Array(n).fill(0));
    for(let [u, v, c] of edges) {
        adj[u-1][v-1] = c;
    }

    function bfs(parent) {
        let visited = Array(n+1).fill(false);
        let queue = [s-1];
        visited[s-1] = true;
        while(queue.length) {
            let u = queue.shift();
            for(let v = 0; v < n; v++) {
                if(!visited[v] && adj[u][v] > 0) {
                    queue.push(v);
                    parent[v] = u;
                    visited[v] = true;
                }
            }
        }
        return visited[t-1];
    }

    let parent = Array(n);
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

let edges = [[1, 7, 7], [2, 3, 6], [2, 5, 6], [3, 1, 6], [3, 7, 11], [4, 1, 7], [4, 2, 4], [4, 5, 5], [5, 1, 4], [5, 3, 4], [6, 2, 8], [6, 4, 10]];
let n = 7, s = 1, t = 5;
console.log(MaxFlow(s, t, edges, n));
