### Solution: Adding New Features in Python

#### Task Description:
You are provided with existing Python code that implements a simple calculator. Your task is to use GitHub CoPilot to add new features to the calculator program.

#### Instructions:
1. Open Visual Studio Code, if not already open, and navigate to the [calculator.py](calculator.py) file.
2. Review the existing code in the `calculator.py` file.
3. While in the file, press `Ctrl+I` to invoke GitHub CoPilot.
4. In the chat window ask CoPilot to add the features for Exponentiation, Square Root, and Modulus.
5. Review the suggestions and accept a suggestion that is preferred.

#### Expected Output:
If the new features are added correctly, the updated calculator should be able to perform exponentiation, calculate square roots, and find remainders.

CoPilot should suggest something similar to the following:
```python
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error: Division by zero"
    return x / y

def power(x, y):
    return x ** y

def sqrt(x):
    return x ** 0.5

def modulus(x, y):
    if y == 0:
        return "Error: Division by zero"
    return x % y
```
