### Solution: Unit Testing with GitHub CoPilot

#### Task Description:
You are provided with an existing C# solution, consisting of a library project and a unit test project. The library project has a set of functions that perform simple and advanced Mathematical computations. Your task is to use GitHub CoPilot to generate unit tests for the functions in the `AdvancedMath.cs` class file.

#### Instructions:
1. Navigate to the starting C# project and code available at [Calculator/](Calcualtor/).
2. Open the `AdvancedMath.cs` file in the CalculatorLibrary project, and the `SimpleMathTests.cs` file in the CalculatorLibrary.Tests project.
3. In the `AdvancedMath.cs` file, highlight the `AdvancedMath` class and press `Ctrl+I` to bring up the CoPilot chat.
4. Type or select the `/tests` command to generate unit tests for the `AdvancedMath` class.
5. Review the test results and accept the suggestion or regenerate to see a different suggestion.
6. Once a suggestion is accepted, move the generated file (`AdvancedMathTests.cs`) to the `CalculatorLibrary.Tests` project.
7. Run `dotnet test` to execute the tests and verify that they pass.

#### Expected Output:
If the `AdvancedMath` functions and the unit tests are correctly implemented, there should be more than 5 tests and they should all pass.

CoPilot will generate a set of unit tests similar to the below:
```csharp
using CalculatorLibrary;
using NUnit.Framework;

namespace CalculatorLibrary.Tests
{
    [TestFixture]
    public class AdvancedMathTests
    {
        private AdvancedMath _advancedMath;

        [SetUp]
        public void Setup()
        {
            _advancedMath = new AdvancedMath();
        }

        [Test]
        public void Square_ReturnsCorrectResult()
        {
            // Arrange
            double a = 5;

            // Act
            double result = _advancedMath.Square(a);

            // Assert
            Assert.AreEqual(25, result);
        }

        [Test]
        public void Power_ReturnsCorrectResult()
        {
            // Arrange
            double a = 2;
            double b = 3;

            // Act
            double result = _advancedMath.Power(a, b);

            // Assert
            Assert.AreEqual(8, result);
        }

        [Test]
        public void Log_ReturnsCorrectResult()
        {
            // Arrange
            double a = 10;

            // Act
            double result = _advancedMath.Log(a);

            // Assert
            Assert.AreEqual(2.302585092994046, result);
        }

        [Test]
        public void Sqrt_ReturnsCorrectResult()
        {
            // Arrange
            double a = 25;

            // Act
            double result = _advancedMath.Sqrt(a);

            // Assert
            Assert.AreEqual(5, result);
        }
    }
}
```