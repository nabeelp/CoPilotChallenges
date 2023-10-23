### Challenge: Modifying Code for Multilingual Support

#### Task Description:

You are tasked with modifying a C# application to return messages in multiple languages including English, Afrikaans, Zulu, Sotho, French, and Mandarin. Use GitHub Copilot to generate code snippets that assist in the process, and leverage resources for localization.

#### Provided C# Code (Sample):

```csharp
using System;
using System.Resources;
using System.Reflection;

class Program
{
    static void Main()
    {
        Greet("World");
    }

    static void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
}
```

#### Instructions:

1. Open your preferred C# IDE or text editor.
2. Create a new C# file named `Program.cs`.
3. Use GitHub Copilot to assist you in generating code snippets that add multilingual support to the application, utilizing resources for localization.
4. Focus on generating code for tasks like setting up resource files, retrieving messages, and language selection.
5. Implement the generated code snippets into the provided C# code to add the desired multilingual features.

#### Challenge Notes:

- Pay attention to how GitHub Copilot suggests code for adding multilingual support using resources.

#### Additional Tips:

- Experiment with different languages and messages to see how GitHub Copilot adapts its suggestions.

#### Sample Code (Generated with CoPilot):

```csharp
using System;
using System.Resources;
using System.Reflection;

class Program
{
    static void Main()
    {
        // Set the desired language
        string language = "fr";

        // Greet in the selected language
        Greet(language, "World");
    }

    static void Greet(string language, string name)
    {
        ResourceManager rm = new ResourceManager("MultilingualApp.Messages", Assembly.GetExecutingAssembly());
        string greeting = rm.GetString($"Greeting_{language}");

        Console.WriteLine($"{greeting}, {name}!");
    }
}
```

#### Expected Output:

If implemented correctly, running the C# program with different language codes should print greetings in the corresponding languages (English, Afrikaans, Zulu, Sotho, French, and Mandarin) by utilizing resource files.

#### Challenge Conclusion:

This exercise demonstrates how GitHub Copilot can assist in modifying a C# application to return messages in multiple languages, leveraging resources for localization. It showcases how AI assistance can speed up the development process for tasks like language localization.
