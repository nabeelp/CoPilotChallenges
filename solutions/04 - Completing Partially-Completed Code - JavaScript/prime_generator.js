/**
 * Checks if a given number is prime or not.
 * @param {number} n - The number to check for primality.
 * @returns {boolean} - Returns true if the number is prime, false otherwise.
 */
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Generates an array of prime numbers up to a given limit.
 * @param {number} limit - The upper limit of the range to generate primes for.
 * @returns {number[]} - An array of prime numbers up to the given limit.
 */
function generatePrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(generatePrimes(50));