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
