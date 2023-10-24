using NUnit.Framework;
using System;

namespace CalculatorLibrary.Tests
{
    [TestFixture]
    public class SimpleMathTests
    {
        private readonly SimpleMath _calculator;

        public SimpleMathTests()
        {
            _calculator = new SimpleMath();
        }

        [TestCase]
        public void Add_ReturnsCorrectResult()
        {
            double result = _calculator.Add(2, 3);
            Assert.AreEqual(5, result);
        }

        [TestCase]
        public void Subtract_ReturnsCorrectResult()
        {
            double result = _calculator.Subtract(5, 3);
            Assert.AreEqual(2, result);
        }

        [TestCase]
        public void Multiply_ReturnsCorrectResult()
        {
            double result = _calculator.Multiply(2, 3);
            Assert.AreEqual(6, result);
        }

        [TestCase]
        public void Divide_ReturnsCorrectResult()
        {
            double result = _calculator.Divide(6, 3);
            Assert.AreEqual(2, result);
        }

        [TestCase]
        public void Divide_ByZeroThrowsException()
        {
            Assert.Throws<DivideByZeroException>(() => _calculator.Divide(6, 0));
        }
    }
}