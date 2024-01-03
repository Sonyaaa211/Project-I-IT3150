function minimumSpanningTree(edges, N) {
    let adjList = Array.from({length: N}, () => []);
    for(let [u, v, w] of edges) {
        adjList[u-1].push([v-1, w]);
        adjList[v-1].push([u-1, w]);
    }
    let key = Array(N).fill(Infinity);
    let parent = Array(N).fill(-1);
    let inMST = Array(N).fill(false);
    key[0] = 0;

    for(let count = 0; count < N-1; count++) {
        let u = minKey(key, inMST);
        inMST[u] = true;

        for(let [v, w] of adjList[u]) {
            if(!inMST[v] && w < key[v]) {
                parent[v] = u;
                key[v] = w;
            }
        }
    }

    return key.reduce((a, b) => a + b, 0);
}

function minKey(key, inMST) {
    let min = Infinity;
    let minIndex = -1;

    for(let v = 0; v < key.length; v++) {
        if(!inMST[v] && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }

    return minIndex;
}
let edges = [[1, 2, 1], [1, 3, 4], [1, 5, 1], [2, 4, 2], [2, 5, 1], [3, 4, 3], [3, 5, 3], [4, 5, 2]];
let N = 5;
console.log(minimumSpanningTree(edges, N));