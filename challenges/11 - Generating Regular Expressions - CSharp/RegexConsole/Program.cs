using System;
using System.Text.RegularExpressions;

namespace RegexConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            string inputString = "Hello, my email is john@example.com, and my phone number is (123) 456-7890.";

            // Use Copilot to generate a regex to extract the email address

            // Use Copilot to generate a regex to extract the phone number

            ExtractEmailAndPhone(inputString, emailRegex, phoneRegex);
        }

        static void ExtractEmailAndPhone(string input, string emailRegex, string phoneRegex)
        {
            Match emailMatch = Regex.Match(input, emailRegex);
            Match phoneMatch = Regex.Match(input, phoneRegex);

            Console.WriteLine("Extracted Email: " + emailMatch.Value);
            Console.WriteLine("Extracted Phone: " + phoneMatch.Value);
        }
    }
}
