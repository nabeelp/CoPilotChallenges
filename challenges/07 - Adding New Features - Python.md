### Challenge: Adding New Features in Python

#### Task Description:
You are provided with existing Python code that implements a simple calculator. Your task is to use GitHub CoPilot to add new features to the calculator program.

#### Existing Code:
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
```

#### New Features to Add:
1. **Exponentiation Function**:
   - Implement a new function `power(x, y)` that calculates `x` raised to the power of `y`.

2. **Square Root Function**:
   - Implement a new function `sqrt(x)` that calculates the square root of `x`.

3. **Modulus Function**:
   - Implement a new function `modulus(x, y)` that calculates the remainder when `x` is divided by `y`.

#### Instructions:
1. Open your preferred Python IDE or text editor.
2. Create a new Python file named `calculator.py`.
3. Use GitHub CoPilot to assist you in adding the new features as described above.
4. Ensure that the added features work correctly and integrate seamlessly with the existing code.

#### Challenge Notes:
- Pay attention to error handling, especially for edge cases like division by zero.

#### Additional Tips:
- Utilize CoPilot's suggestions to efficiently add the new features.
- Test the updated calculator with various inputs to ensure the added functions work correctly.

#### Updated Code (Generated with CoPilot):
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

#### Expected Output:
If the new features are added correctly, the updated calculator should be able to perform exponentiation, calculate square roots, and find remainders.

#### Challenge Conclusion:
Upon completion, you will have an updated calculator program with additional features. This exercise demonstrates how GitHub CoPilot can assist in adding new functionalities to existing code.

[Next Challenge](08%20-%20Documenting%20Existing%20Code%20-%20JavaScript.md)