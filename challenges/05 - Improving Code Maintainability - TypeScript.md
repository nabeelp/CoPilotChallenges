### Challenge: Improving Code Maintainability in TypeScript

#### Task Description:
You are provided with existing TypeScript code that calculates the factorial of a given number. Your task is to use GitHub CoPilot to refactor the code for improved maintainability.

#### Existing Code:
```typescript
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
```

#### Instructions:
1. Open your preferred TypeScript IDE or text editor.
2. Create a new TypeScript file named `refactored_factorial.ts`.
3. Use GitHub CoPilot to assist you in refactoring the `factorial` function for improved maintainability.
4. Ensure that the refactored code still calculates the factorial correctly.

#### Challenge Notes:
- Focus on improving variable names, adding comments, and making the code more TypeScript-friendly.
- Consider breaking down complex expressions for better readability.

#### Additional Tips:
- Utilize CoPilot's suggestions to generate cleaner and more maintainable code.
- Test the refactored code with various input values to ensure it still calculates factorials correctly.

#### Refactored Code (Generated with CoPilot):
```typescript
function calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
```

#### Expected Output:
If the refactoring is done correctly, the `calculateFactorial` function should still calculate factorials correctly, but the code will be more maintainable.

#### Challenge Conclusion:
Upon completion, you will have a refactored version of the `factorial` function that demonstrates how GitHub CoPilot can assist in improving code maintainability in TypeScript.

[Next Challenge](06%20-%20Bug%20Fixing%20-%20Java.md)