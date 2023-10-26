### Solution: Improving Code Maintainability in TypeScript

#### Task Description:
You are provided with existing TypeScript code that calculates the factorial of a given number. Your task is to use GitHub CoPilot to refactor the code for improved maintainability.

#### Instructions:
1. Open Visual Studio Code, if not already open, and open the (GetDangerStatus.ts)[GetDangerStatus.ts] file.
2. Highlight the `gs` function, press `Ctrl + I` to activate GitHub CoPilot, and ask CoPilot to refactor the `gs` function, e.g. "improve the maintainability and readability of this code by using meaningful variables, refactoring the code as needed, and adding comments". 
3. The message used has abig impact on the suggested output, so try different messages if the first one doesn't work or click the Regenerate button to see different suggestions.

#### Expected Output:
If the refactoring is done correctly, the `gs` function should still perform the same logic correctly, but the code will be more maintainable.

CoPilot's suggestions for refactoring the `gs` function:
```typescript
// Function to return a colour indicator and a description of the danger level, based on the level number inputted

/**
 * Returns a tuple containing a color indicator and a description of the danger level based on the level number inputted.
 * @param level The level number to check the danger status for.
 * @returns A tuple containing a color indicator and a description of the danger level.
 * @throws An error if the level number is not within the range of 0 to 100.
 */
function getDangerStatus(level: number): [string, string] {
    // Define the danger level ranges and their corresponding color indicators and descriptions.
    const dangerLevels = [
        { range: [0, 10], color: "Red", description: "Extreme Danger" },
        { range: [11, 20], color: "Red", description: "High Danger" },
        { range: [21, 30], color: "Orange", description: "Danger" },
        { range: [31, 40], color: "Orange", description: "Moderate Danger" },
        { range: [41, 50], color: "Yellow", description: "Low Danger" },
        { range: [51, 60], color: "Yellow", description: "Moderate Safety" },
        { range: [61, 70], color: "Green", description: "Safe" },
        { range: [71, 80], color: "Green", description: "Very Safe" },
        { range: [81, 90], color: "Blue", description: "Extremely Safe" },
        { range: [91, 100], color: "Blue", description: "Ultra Safe" },
    ];

    // Find the danger level that the level number falls within.
    const dangerLevel = dangerLevels.find((levelRange) => {
        const [min, max] = levelRange.range;
        return level >= min && level <= max;
    });

    // If no danger level is found, throw an error.
    if (!dangerLevel) {
        throw new Error("Level number must be within the range of 0 to 100.");
    }

    // Return the color indicator and description of the danger level.
    return [dangerLevel.color, dangerLevel.description];
}
```