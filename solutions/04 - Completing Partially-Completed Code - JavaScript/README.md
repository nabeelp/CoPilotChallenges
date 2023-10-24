### Solution: Completing Partially-Completed Code in JavaScript

#### Task Description:
You are provided with a partially-completed JavaScript program that generates a list of prime numbers up to a specified limit. Your task is to use GitHub CoPilot to complete the missing parts of the code.

#### Instructions:
1. Open Visual Studio Code, if not already open, and navigate to (prime_generator.js)[prime_generator.js].
2. Review the provided code and notice that the `isPrime` function is incomplete.
3. Highlight the `isPrime` function, press `Ctrl + I` to activate GitHub CoPilot, and aske CoPilot to complete the isPrime function.  Or press `Enter` after the function name to get CoPilot to start making inline suggestions
4. Review the suggestions and select the one that best matches the desired functionality.
5. Ensure that the completed code generates a list of prime numbers up to the specified limit.

#### Expected Output:
If the missing parts of the code are completed correctly, the `generatePrimes` function should generate an array of prime numbers up to the specified limit.

CoPilot's suggestions for completing the `isPrime` function:
```javascript
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
```