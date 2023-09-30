QUESTIONS

Section A
Sorting Algorithms:

1. Implement the merge sort algorithm for sorting a linked list. Analyze the time and space complexity of your implementation.
2. Modify the Quick Sort algorithm to use three-way partitioning, which is particularly useful for duplicate keys.



Section B
Searching Algorithms:
1. Implement the interpolation search algorithm and explain how it differs from binary search. Analyze its time complexity.
2. Implement the exponential search algorithm for a sorted array and analyze its time complexity.




Section C

1. Time and Space Complexity Analysis:
Analyze the time and space complexity, including
the best-case, worst-case, and average-case scenarios of the below algorithm.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    const fib = new Array(n + 1);
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}



Section D
Arrays, Linked Lists, Stacks, Queues:
1.
Implement a queue data structure using two stacks. Analyze the time
complexity of enqueue and dequeue operations.Trees, Binary Trees, Binary
Search Trees:
2. Implement the insertion operation for an AVL tree,
ensuring that the tree remains balanced. Discuss the rotations required
and their complexity.
