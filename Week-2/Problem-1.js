/*Given two positive integers k and n. Compute C(k,n) which is the number of ways to select k objects from a given set of n objects.*/
const MOD = 1000000007;

function modInverse(a, m) {
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

function calculateC(k, n) {
    if (k === 0) return 1;
    let ni = 1, ki = 1;
    for (let i = 1; i <= k; i++) {
        ki = (ki * i) % MOD;
        ni = (ni * (n - i + 1)) % MOD;
    }
    let result = (ni * modInverse(ki, MOD)) % MOD;
    return result;
}

// Use the functions
let k = 500;
let n = 999;
console.log(calculateC(k, n));