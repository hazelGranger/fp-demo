function gcd(a, b) {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}

console.log(gcd(24, 98));


function factorial(n) {
    return n === 0 ? 1 : (factorial(n - 1) * n);
}

console.log(factorial(4));