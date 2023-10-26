### Challenge: Improving Code Maintainability in TypeScript

#### Task Description:
You are provided with existing TypeScript code that calculates the factorial of a given number. Your task is to use GitHub CoPilot to refactor the code for improved maintainability.

#### Existing Code:
```typescript
// Function to return a colour indicator and a description of the danger level, based on the level number inputted
function gs(n: number): [string, string] {
    if (n >= 0 && n <= 10) {
        return ["Red", "Extreme Danger"];
    } else if (n >= 11 && n <= 20) {
        return ["Red", "High Danger"];
    } else if (n >= 21 && n <= 30) {
        return ["Orange", "Danger"];
    } else if (n >= 31 && n <= 40) {
        return ["Orange", "Moderate Danger"];
    } else if (n >= 41 && n <= 50) {
        return ["Yellow", "Low Danger"];
    } else if (n >= 51 && n <= 60) {
        return ["Yellow", "Moderate Safety"];
    } else if (n >= 61 && n <= 70) {
        return ["Green", "Safe"];
    } else if (n >= 71 && n <= 80) {
        return ["Green", "Very Safe"];
    } else if (n >= 81 && n <= 90) {
        return ["Blue", "Extremely Safe"];
    } else if (n >= 91 && n <= 100) {
        return ["Blue", "Ultra Safe"];
    } else {
        throw new Error("error");
    }
}
```

#### Instructions:
1. Open Visual Studio Code, if not already open, and open the (GetDangerStatus.ts)[GetDangerStatus.ts] file.
2. Use GitHub CoPilot to assist you in refactoring the `gs` function for improved maintainability.
3. Review the prosed suggestions and try regenerating new suggestions, or try changing the way you ask CoPilot to change the code.

#### Challenge Notes:
- Focus on improving variable names, adding comments, and making the code more TypeScript-friendly.
- Consider breaking down complex expressions for better readability.

#### Additional Tips:
- Utilize CoPilot's suggestions to generate cleaner and more maintainable code.

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
If the refactoring is done correctly, the `gs` function should still perform the same logic correctly, but the code will be more maintainable.

#### Challenge Conclusion:
Upon completion, you will have a refactored version of the `gs` function that demonstrates how GitHub CoPilot can assist in improving code maintainability in TypeScript.

[Next Challenge](../06%20-%20Bug%20Fixing%20-%20Java/README.md)
