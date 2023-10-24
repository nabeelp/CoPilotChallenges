def bubble_sort(l):
    for a in range(len(l)): 
        for b in range(len(l)):
            if l[a]< l[b]:
                t=l[a]
                l[a]=l[b]
                l[b]=t
    return l

# test calls to the bubble_sort() function to test for the expected result
print(bubble_sort([5, 21, 44, 12, 28]) == [5, 12, 21, 28, 44])
print(bubble_sort([1, 5, 3, 2, 4]) == [1, 2, 3, 4, 5])
