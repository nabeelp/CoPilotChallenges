### Challenge: Unit Testing with GitHub CoPilot

#### Task Description:
You are provided with an existing C# solution, consisting of a library project and a unit test project. The library project has a set of functions that perform simple and advanced Mathematical computations. Your task is to use GitHub CoPilot to generate unit tests for the functions in the `AdvancedMath.cs` class file.

#### Instructions:
1. Navigate to the starting C# project and code available at [Calculator/](Calcualtor/).
2. Review the solution and note that there are unit tests that already exist for the `SimpleMath` class.
3. To execute the tests, run `dotnet test` from the `Calculator` directory, and note that there are 5 tests and that they all pass.
4. Use GitHub CoPilot to assist you in writing unit tests for the functions in the `AdvancedMath` class.
5. Run `dotnet test` to execute the tests and verify that they pass.

#### Challenge Notes:
- Note that the file generated will need to be moved to the `CalculatorLibrary.Tests` project, if not placed there by CoPilot.
- Ensure that the unit tests accurately verify the correctness of the `AdvancedMath` functions.

#### Additional Tips:
- Utilize CoPilot's suggestions to generate test cases efficiently.
- Make sure to include assertions to validate the expected outputs.

#### Expected Output:
If the `AdvancedMath` functions and the unit tests are correctly implemented, there should be more than 5 tests and they should all pass.

#### Challenge Conclusion:
Upon completion, you will have extended your existing unit tests to include the `AdvancedMath` functions. This exercise demonstrates how GitHub CoPilot can assist in generating unit tests efficiently.

[Next Challenge](../03%20-%20Code%20Refactoring%20for%20Readability%20-%20Python/README.md)