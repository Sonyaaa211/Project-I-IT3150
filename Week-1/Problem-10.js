project.problemInfo[10] = 
"Given a sequence of integers a1, a2, ..., an. Perform a sequence of queries over this sequence including:\nfind-max: return the maximum element of the given sequence\nfind-min: return the minimum element of the given sequence \nsum: return the sum of the elements of the given sequence \nfind-max-segment i j: return the maximum element of the subsequence from index i to index j (i <= j)"

project.solution_1_10 = function(input) {
    const lines = input.split("\n");
    const sequence = lines[1].split(" ").map(Number);
    const results = "";
    for (let i = 3; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "find-max":
                results += Math.max(...sequence).toString() +"\n";
                break;
            case "find-min":
                results += Math.min(...sequence).toString() +"\n";
                break;
            case "sum":
                results += sequence.reduce((a, b) => a + b, 0).toString() +"\n";
                break;
            case "find-max-segment":
                const i = Number(query[1]);
                const j = Number(query[2]);
                results += Math.max(...sequence.slice(i, j + 1)).toString() +"\n";
                break;
            default:
                break;
        }
    }
    return results;
}

const input = `5\n1 4 3 2 5\n*\nfind-max\nfind-min\nfind-max-segment 1 3\nfind-max-segment 2 5\nsum\n***\n`;
