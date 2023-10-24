### Solution: Code Refactoring for Readability

#### Task Description:
You are provided with an existing Python function that sorts a list using the bubble sort algorithm. Your task is to use GitHub CoPilot to refactor the code to make it more readable and maintainable.

#### Instructions:
1. Navigate to the (bubble_sort.py)[bubble_sort.py] file, which contains the buuble sort function as defined above.
2. Highlight the `bubble_sort` function and press `Ctrl+I` to open the CoPilot chat.
3. Enter a request like `improve this code's performance, readability and maintainability, and change the variable names to be more meaningful` and hit enter.
4. Review the suggested changes and regenerate if necessary.
5. Once you are satisfied with the refactored code, click Accept.
6. Run `py bubble_sort.py` to test the function.


#### Expected Output:
If the refactoring is done correctly, the `bubble_sort` function should still sort lists correctly, but the code will be more readable and maintainable.

CoPilot will generate a refactored version of the `bubble_sort` function similar to the below:
```python
def bubble_sort(lst):
    """
    Sorts a list of numbers using the bubble sort algorithm.

    Args:
        lst: A list of numbers to be sorted.

    Returns:
        The sorted list of numbers.
    """
    n = len(lst)
    # Traverse through all array elements
    for i in range(n):
        # Flag to check if any swaps were made in the inner loop
        swapped = False
        # Last i elements are already in place
        for j in range(n - i - 1):
            # Swap if the element found is greater than the next element
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
                swapped = True
        # If no swaps were made, then the list is already sorted
        if not swapped:
            break
    return lst

# test calls to the bubble_sort() function to test for the expected result
print(bubble_sort([5, 21, 44, 12, 28]) == [5, 12, 21, 28, 44])
print(bubble_sort([1, 5, 3, 2, 4]) == [1, 2, 3, 4, 5])
```