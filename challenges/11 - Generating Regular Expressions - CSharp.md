### Challenge: Generating Regular Expressions in C#

#### Task Description:

You are tasked with using GitHub Copilot to generate regular expressions (regex) for specific tasks in a C# application.

#### Provided C# Code (Sample):

```csharp
using System;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        string inputString = "Hello, my email is john@example.com, and my phone number is (123) 456-7890.";

        // Use Copilot to generate a regex to extract the email address
        string emailRegex = "";

        // Use Copilot to generate a regex to extract the phone number
        string phoneRegex = "";

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
```

#### Instructions:

1. Open your preferred C# IDE or text editor.
2. Create a new C# file named `Program.cs`.
3. Use GitHub Copilot to assist you in generating regular expressions (regex) for the specified tasks.
4. Focus on generating regex for extracting the email address and phone number from the provided input string.
5. Implement the generated regex in the provided C# code.

#### Challenge Notes:

- Pay attention to how GitHub Copilot suggests regex patterns for the specified tasks.

#### Sample Code (Generated with CoPilot):

```csharp
using System;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        string inputString = "Hello, my email is john@example.com, and my phone number is (123) 456-7890.";

        // Use Copilot to generate a regex to extract the email address
        string emailRegex = @"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}";

        // Use Copilot to generate a regex to extract the phone number
        string phoneRegex = @"\(\d{3}\) \d{3}-\d{4}";

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
```

#### Expected Output:

If implemented correctly, running the C# program should extract and print the email address and phone number from the provided input string.

#### Challenge Conclusion:

This exercise demonstrates how GitHub Copilot can assist in generating regular expressions (regex) for specific tasks in a C# application. It showcases how AI assistance can be valuable for tasks involving pattern matching and extraction.