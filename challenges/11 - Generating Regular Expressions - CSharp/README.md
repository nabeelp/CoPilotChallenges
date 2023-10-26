### Challenge: Generating Regular Expressions in C#

#### Task Description:

You are tasked with using GitHub Copilot to generate regular expressions (regex) for specific tasks in a C# application.

#### Provided C# Code (Sample):

```csharp
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
```

#### Instructions:

1. Open Visual Studio Code and navigate to the C# project in the [RegexConsole](RegexConsole/) folder.
2. Review the code in the `Program.cs` file.
3. Use GitHub Copilot to assist you in generating regular expressions (regex) for the specified tasks.
4. Focus on generating regex for extracting the email address and phone number from the provided input string.
5. Implement the generated regex in the provided C# code.

#### Challenge Notes:

- Pay attention to how GitHub Copilot suggests regex patterns for the specified tasks.

#### Expected Output:

If implemented correctly, running the C# program should extract and print the email address and phone number from the provided input string.

#### Challenge Conclusion:

This exercise demonstrates how GitHub Copilot can assist in generating regular expressions (regex) for specific tasks in a C# application. It showcases how AI assistance can be valuable for tasks involving pattern matching and extraction.

[Next Challenge](../12%20-%20Learning%20a%20new%20Language%20-%20Ruby/README.md)