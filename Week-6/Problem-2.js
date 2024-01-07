/*Shortest Path between 2 nodes on a directed graph with non-negative weights*/

function shortestPath(s, t, edges, N) {
    let dist = Array.from({length: N}, () => Array(N).fill(Infinity));

    for(let i = 0; i < N; i++) {
        dist[i][i] = 0;
    }

    for(let [u, v, w] of edges) {
        dist[u-1][v-1] = w;
    }

    for(let k = 0; k < N; k++) {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                if(dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if(dist[i][j] === Infinity) {
                dist[i][j] = -1;
            }
        }
    }

    return dist[s-1][t-1];
}

let edges = [[1, 2, 97], [3, 1, 72], [1, 4, 19], [2, 5, 87], [2, 3, 63], [4, 5, 78], [5, 1, 18]];
let N = 5;
console.log(shortestPath(1, 5, edges, N));