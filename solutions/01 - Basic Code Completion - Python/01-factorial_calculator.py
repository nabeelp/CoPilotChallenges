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
