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
