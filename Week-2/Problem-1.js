project.problemInfo[15] = 
"Given two positive integers k and n. Compute C(k,n) which is the number of ways to select k objects from a given set of n objects.*/\nExample input:\n16 32";
const MOD = 1000000007;

project.modInverse = function(a, m) {
    let m0 = m, t, q;
    let x0 = 0, x1 = 1;
    if (m === 1) return 0;
    while (a > 1) {
        q = Math.floor(a / m);
        t = m;
        m = a % m, a = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }
    if (x1 < 0) x1 += m0;
    return x1;
}

project.solution_2_1 = function(input) {
    const lines = input.split("\n");
    let k = parseInt(lines[0]);
    let n = parseInt(lines[1]);
    if (k === 0) return 1;
    let ni = 1, ki = 1;
    for (let i = 1; i <= k; i++) {
        ki = (ki * i) % 1000000007;
        ni = (ni * (n - i + 1)) % 1000000007;
    }
    let result = (ni * project.modInverse(ki, 1000000007)) % 1000000007;
    return result;
}