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
