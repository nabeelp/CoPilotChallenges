### Solution: Basic Code Completion

#### Task Description:
Write a Python program that accepts a number from the user calculates the factorial of that number.

#### Instructions:
1. Navigate to [factorial_calculator.py](factorial_calculator.py).
1. Add comments to the top of the file, something like those shown below.  Try different ways in which the comments are written to see the effect this has on what CoPiolt suggests.
```python
# This is a function that takes a number as an input and calculates the factorial of a number and returns the result
# Write the result of this function out to the console with the message "The factorial of 5 is: "

# get the input value from the user
```
1. On the new line wait for the CoPilot suggestions to appear.
1. Assess the suggestion and accept the one that best fits the task description. Remember that you can use the `Alt+]` keyboard shortcut to navigate the suggestions.
1. Continue to evaluate and accept suggestions until the code is complete.
1. Run the program and test it with different input values to ensure it calculates the factorial correctly.

#### Expected Output:
CoPilot will generate code similar to the below:
```python
# This is a function that takes a number as an input and calculates the factorial of a number and returns the result
# Write the result of this function out to the console with the message "The factorial of 5 is: "

# get the input value from the user
number = int(input("Enter a number: "))

# define the factorial function
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# call the factorial function and print the result
print("The factorial of", number, "is:", factorial(number))
```