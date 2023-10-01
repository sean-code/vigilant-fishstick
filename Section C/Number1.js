function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    const fib = new Array(n + 1);
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}
