using System;

namespace CalculatorLibrary
{
    public class AdvancedMath
    {
        public double Square(double a)
        {
            return a * a;
        }

        public double Power(double a, double b)
        {
            return Math.Pow(a, b);
        }

        public double Log(double a)
        {
            return Math.Log(a);
        }

        public double Sqrt(double a)
        {
            return Math.Sqrt(a);
        }

    }
}