### Challenge: Generating Randomised Data Sets for Testing

#### Task Description:

You are tasked with testing a set of functions that process and manipulate data. Your goal is to use the `Faker` library in Python to generate randomized data sets for testing these functions.

#### Provided Python Functions (Sample):

```python
import random

def add_numbers(a, b):
    return a + b

def multiply_numbers(a, b):
    return a * b

def generate_random_numbers(n):
    return [random.randint(1, 100) for _ in range(n)]
```

#### Instructions:

1. Install the `Faker` library in your Python environment (if not already installed) using `pip install faker`.
2. Open your preferred Python IDE or text editor.
3. Create a new Python file named `test_functions.py`.
4. Use the `Faker` library to generate randomized data sets for testing the provided functions.
5. Write tests to verify that the functions work correctly with the randomized data sets.

#### Challenge Notes:

- Pay attention to how you can use the `Faker` library to generate various types of random data.

#### Additional Tips:

- Use the `Faker` library to generate random names, emails, addresses, and other types of data for testing.

#### Sample Code (Generated with CoPilot):

```python
from faker import Faker

fake = Faker()

def generate_random_name():
    return fake.name()

def generate_random_email():
    return fake.email()

def generate_random_address():
    return fake.address()

def generate_random_phone_number():
    return fake.phone_number()
```

#### Expected Output:

If implemented correctly, the code will generate randomized data sets for testing the provided functions.

#### Challenge Conclusion:

This exercise tests your ability to generate random data sets for testing functions. It's important to have diverse test cases to ensure your functions handle different types of data correctly.
