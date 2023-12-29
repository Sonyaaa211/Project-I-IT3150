/*Given a sequence of integers a1, a2, ..., an. Perform a sequence of queries over this sequence including:
find-max: return the maximum element of the given sequence
find-min: return the minimum element of the given sequence 
sum: return the sum of the elements of the given sequence 
find-max-segment i j: return the maximum element of the subsequence from index i to index j (i <= j)*/

function solution(input) {
    const lines = input.split("\n");
    const sequence = lines[1].split(" ").map(Number);
    const results = [];
    for (let i = 3; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "find-max":
                console.log(Math.max(...sequence).toString());
                break;
            case "find-min":
                console.log(Math.min(...sequence).toString());
                break;
            case "sum":
                console.log(sequence.reduce((a, b) => a + b, 0).toString());
                break;
            case "find-max-segment":
                const i = Number(query[1]);
                const j = Number(query[2]);
                console.log(Math.max(...sequence.slice(i, j + 1)).toString());
                break;
            default:
                break;
        }
    }
}

const input = `5\n1 4 3 2 5\n*\nfind-max\nfind-min\nfind-max-segment 1 3\nfind-max-segment 2 5\nsum\n***\n`;
solution(input);