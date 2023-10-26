### Solution: Bug Fixing in Java Code

#### Task Description:
You are provided with existing Java code that is intended to find the maximum element in an array. However, there are some bugs in the code that need to be fixed. Your task is to use GitHub CoPilot to identify and correct these bugs.

#### Instructions:
1. Open Visual Studio Code, if not already open, and navigate to the [Main.java](MaxElementFinder\src\Main.java) file.
2. Review the existing code in the `findMax` method.
3. Highlight the `findMax` method and press `Ctrl+I` to invoke GitHub CoPilot.
4. In the chat window ask CoPilot to fix the bugs in the `findMax` method.
5. Review the suggestions from CoPilot and apply the ones that fix the bugs.
6. Run the code to confirm that both tests pass successfully.

#### Expected Output:
If the bugs are fixed correctly, running the console app should output a successful result for both tests.

CoPilot's suggestion for fixing the bug:
```Java
    // find the element in the array that has the highest value
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
```