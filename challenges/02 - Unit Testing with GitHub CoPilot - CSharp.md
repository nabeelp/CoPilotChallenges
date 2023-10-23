### Challenge: Unit Testing with GitHub CoPilot

#### Task Description:
You are provided with an existing C# function that calculates the Fibonacci sequence. Your task is to use GitHub CoPilot to generate unit tests to ensure the function works correctly.

#### Existing Code:
```csharp
public static int Fibonacci(int n)
{
    if (n <= 1)
        return n;
    else
        return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```

#### Instructions:
1. Open your preferred C# IDE or text editor.
2. Create a new C# file named `FibonacciTests.cs`.
3. Use GitHub CoPilot to assist you in writing unit tests for the `Fibonacci` function.
4. Ensure that the unit tests cover a range of input values.

#### Challenge Notes:
- Pay attention to edge cases and boundary conditions.
- Ensure that the unit tests accurately verify the correctness of the `Fibonacci` function.

#### Additional Tips:
- Utilize CoPilot's suggestions to generate test cases efficiently.
- Make sure to include assertions to validate the expected outputs.

#### Example Unit Tests (Generated with CoPilot):
```csharp
using Xunit;

public class FibonacciTests
{
    [Fact]
    public void TestFibonacci_Zero_ReturnsZero()
    {
        int result = Program.Fibonacci(0);
        Assert.Equal(0, result);
    }

    [Fact]
    public void TestFibonacci_PositiveNumber_ReturnsCorrectValue()
    {
        int result = Program.Fibonacci(6);
        Assert.Equal(8, result);
    }

    [Fact]
    public void TestFibonacci_NegativeNumber_ThrowsException()
    {
        Assert.Throws<ArgumentException>(() => Program.Fibonacci(-5));
    }
}
```

#### Expected Output:
If the `Fibonacci` function and the unit tests are correctly implemented, all tests should pass.

#### Challenge Conclusion:
Upon completion, you will have a set of unit tests to validate the correctness of the provided `Fibonacci` function. This exercise demonstrates how GitHub CoPilot can assist in generating unit tests efficiently.

[Next Challenge](03%20-%20Code%20Refactoring%20for%20Readability%20-%20Python.md)