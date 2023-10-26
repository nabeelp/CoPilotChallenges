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
