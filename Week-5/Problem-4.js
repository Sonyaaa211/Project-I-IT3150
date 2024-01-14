project.problemInfo[36] =  "Minimum Spanning Tree - Kruskal"

project.solution_5_4 = function(input) {
    let lines = input.split("\n");
    let line = lines.shift().split(" ");
    project.v = parseInt(line[0]);
    let e = parseInt(line[1]);

    let adjList = Array.from({length: project.v}, () => []);
    for(let i = 0 ; i < e; i++){
        line = lines.shift().split(" ");
        let v1 = parseInt(line[0]);
        let v2 = parseInt(line[1]);
        let w = parseInt(line[2]);
        adjList[v1-1].push([v2-1, w]);
        adjList[v2-1].push([v1-1, w]);
    }

    let key = Array(project.v).fill(Infinity);
    let parent = Array(project.v).fill(-1);
    let inMST = Array(project.v).fill(false);
    key[0] = 0;

    for(let count = 0; count < project.v-1; count++) {
        let u = project.minKey(key, inMST);
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

project.minKey = function(key, inMST) {
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