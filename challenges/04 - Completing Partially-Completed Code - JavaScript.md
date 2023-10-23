### Challenge: Completing Partially-Completed Code in JavaScript

#### Task Description:
You are provided with a partially-completed JavaScript program that generates a list of prime numbers up to a specified limit. Your task is to use GitHub CoPilot to complete the missing parts of the code.

#### Partially-Completed Code:
```javascript
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimes(limit) {
    const primes = [];
    for (let num = 2; num < limit; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}
```

#### Instructions:
1. Open your preferred JavaScript IDE or text editor.
2. Create a new JavaScript file named `prime_generator.js`.
3. Use GitHub CoPilot to assist you in completing the missing parts of the `isPrime` and `generatePrimes` functions.
4. Ensure that the completed code generates a list of prime numbers up to the specified limit.

#### Challenge Notes:
- Pay attention to the conditions inside the `isPrime` function to accurately determine if a number is prime.
- Make sure the `generatePrimes` function correctly populates the `primes` array with prime numbers.

#### Additional Tips:
- Utilize CoPilot's suggestions to efficiently complete the missing parts of the code.
- Test the completed code with various limits to ensure it generates prime numbers correctly.

#### Completed Code (Generated with CoPilot):
```javascript
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimes(limit) {
    const primes = [];
    for (let num = 2; num < limit; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}
```

#### Expected Output:
If the missing parts of the code are completed correctly, the `generatePrimes` function should generate an array of prime numbers up to the specified limit.

#### Challenge Conclusion:
Upon completion, you will have a functioning program that generates prime numbers up to a specified limit. This exercise demonstrates how GitHub CoPilot can assist in completing partially-written code in JavaScript.
