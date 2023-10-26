### Solution: Speeding up Localization in JavaScript

#### Task Description:

You are tasked with creating a JavaScript program that can greet the user in multiple languages, including English, Afrikaans, Zulu, Sotho, French, and Mandarin. Use GitHub Copilot to assist you in generating code snippets for this task.

#### Instructions:

1. Open your Visual Studio Code, if not already open, and navigate to the [greetings.js](greetings.js) file.
2. Press `Ctrl+I` to invoke GitHub Copilot.
3. In the chat window type "Change this function so that it will generate greetings in multiple languages, and where the language specific text is easy to maintain"
4. Review the suggestions and accept a suggestion that is preferred.

#### Challenge Notes:

- Pay attention to how GitHub Copilot suggests JavaScript code snippets for the specified tasks.

#### Expected Output:

If implemented correctly, running the JavaScript program should print greetings in the corresponding languages (English, Afrikaans, Zulu, Sotho, French, and Mandarin) for the provided name.

CoPilot will generate code similar to the following:
```javascript
console.log("Hello World");const greetings = {
    en: "Hello World",
    es: "¡Hola Mundo!",
    fr: "Bonjour le monde",
    de: "Hallo Welt"
};

function generateGreeting(languageCode) {
    const greeting = greetings[languageCode] || greetings.en;
    console.log(greeting);
}

// Example usage:
generateGreeting("es"); // outputs "¡Hola Mundo!"
generateGreeting("fr"); // outputs "Bonjour le monde"
generateGreeting("zh"); // outputs "Hello World" (default to English)
```