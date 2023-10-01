**QUESTIONS**

`Section A || Sorting Algorithms:`

1. Implement the merge sort algorithm for sorting a linked list. Analyze the time and space complexity of your implementation.



3. Explain how you would apply merge sort to sort large files that don't
fit into memory. Discuss the challenges and steps involved.



`Section B || Searching Algorithms:`
1. Implement the interpolation search algorithm and explain how it differs from binary search. Analyze its time complexity.






`Section C`

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



`Section D ||
Arrays, Linked Lists, Stacks, Queues:`


3. Explain the concept of a threaded binary
tree, and implement an algorithm to convert a binary tree into a
threaded binary tree.
