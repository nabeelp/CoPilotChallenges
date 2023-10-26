### Challenge: Bug Fixing in Java Code

#### Task Description:
You are provided with existing Java code that is intended to find the maximum element in an array. However, there are some bugs in the code that need to be fixed. Your task is to use GitHub CoPilot to identify and correct these bugs.

#### Existing Code:
```java
    // find the element in the array that has the highest value
    public static int findMax(int[] arr) {
        int max = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > 2 && arr[i] > arr[i-1]) {
                max = arr[i];
            }
        }
        return max;
    }
```

#### Instructions:
1. Open Visual Studio Code, if not already open, and navigate to the [Main.java](MaxElementFinder\src\Main.java) file.
2. Review the existing code in the `findMax` method.
3. Use GitHub CoPilot to assist you in fixing the bugs in the `findMax` method.
4. Ensure that the corrected code accurately finds the maximum element in the array.

#### Challenge Notes:
- Pay attention to the initial value of `max` and the condition inside the loop.
- Make sure the `findMax` method works correctly for different arrays.

#### Additional Tips:
- Utilize CoPilot's suggestions to efficiently fix the bugs in the code.
- Test the corrected code with various input arrays to ensure it finds the maximum element accurately.

#### Expected Output:
If the bugs are fixed correctly, running the console app should output a successful result for both tests.

#### Challenge Conclusion:
Upon completion, you will have a corrected version of the `findMax` method that demonstrates how GitHub CoPilot can assist in bug fixing in Java code.

[Next Challenge](../07%20-%20Adding%20New%20Features%20-%20Python/README.md)
