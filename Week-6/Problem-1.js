project.problemInfo[37] = "All pair shortest paths"
project.solution_6_1 = function(input) {

    let lines = input.split("\n");
    let line = lines.shift().split(" ");
    project.v = parseInt(line[0]);
    let e = parseInt(line[1]);

    let dist = Array.from({length: project.v}, () => Array(project.v).fill(Infinity));

    for(let i = 0; i < project.v; i++) {
        dist[i][i] = 0;
    }
    for(let i = 0 ; i < e; i++){
        line = lines.shift().split(" ");
        let v1 = parseInt(line[0]);
        let v2 = parseInt(line[1]);
        let w = parseInt(line[2]);
        dist[v1-1][v2-1] = w;
    }

    for(let k = 0; k < project.v; k++) {
        for(let i = 0; i < project.v; i++) {
            for(let j = 0; j < project.v; j++) {
                if(dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    for(let i = 0; i < project.v; i++) {
        for(let j = 0; j < project.v; j++) {
            if(dist[i][j] === Infinity) {
                dist[i][j] = -1;
            }
            project.res += dist[i][j] + " ";
        }
        project.res += "\n";
    }
    return project.res;
}