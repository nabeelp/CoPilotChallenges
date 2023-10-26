### Solution: Generating Regular Expressions in C#

#### Task Description:

You are tasked with using GitHub Copilot to generate regular expressions (regex) for specific tasks in a C# application.

#### Instructions:

1. Open Visual Studio Code and navigate to the C# project in the [RegexConsole](RegexConsole/) folder.
2. Review the code in the `Program.cs` file.
3. On each of the comment lines, hit `Enter` and wait for GitHub Copilot to generate an appropriate regex pattern.
4. Review the generated regex patterns and select the most appropriate one for each task.
5. Run the C# program, by executing `dotnet run` on the command line in the RegexConsole folder, to verify that the generated regex patterns are correct.

#### Expected Output:

If implemented correctly, running the C# program should extract and print the email address and phone number from the provided input string.

CoPilot will generate regex patterns, and the completed code should look like the following:
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
            string emailRegex = @"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+";

            // Use Copilot to generate a regex to extract the phone number
            string phoneRegex = @"(\(\d{3}\)|\d{3})-?\s?\d{3}-?\s?\d{4}";

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