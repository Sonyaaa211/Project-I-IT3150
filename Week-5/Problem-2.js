project.problemInfo[34] = "List order of nodes visited by a DFS"

project.solution_5_2 = function(input){
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
    project.dfs(1);
    return project.res;
}

project.dfs = function(u){
    project.res += u + " ";
    project.visited[u] = true;
    for(let i = 1; i <= project.v; i++){
        if(project.edges[u-1][i-1] == 1 && !project.visited[i]){
            project.dfs(i);
        }
    }
}
