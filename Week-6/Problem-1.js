function shortestPath(edges, N) {
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

    return dist;
}

let edges = [[1, 2, 9], [1, 3, 7], [1, 4, 2], [2, 1, 1], [2, 4, 5], [3, 4, 6], [3, 2, 2], [4, 1, 5], [4, 2, 8]];
let N = 4;
console.log(shortestPath(edges, N));