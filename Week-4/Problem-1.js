// Hash Over Strings

function solution(n, m, strings) {
    let results = [];
    for (let i = 0; i < n; i++) {
        let s = strings[i];
        let k = s.length;
        let hashCode = 0;
        for (let j = 0; j < k; j++) {
            hashCode = (hashCode * 256 + s.charCodeAt(j)) % m;
        }
        results.push(hashCode);
    }
    return results;
}

let n = 4;
let m = 1000;
let strings = ["a", "ab", "abc", "abcd"];
console.log(solution(n, m, strings));