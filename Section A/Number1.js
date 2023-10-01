// 1. Implement the merge sort algorithm for sorting a linked list. Analyze the time and space complexity of your implementation.
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeSort(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const middle = getMiddle(head);
    const nextOfMiddle = middle.next;
    middle.next = null;

    const left = mergeSort(head);
    const right = mergeSort(nextOfMiddle);

    const sortedList = sortedMerge(left, right);
    return sortedList;
}

function getMiddle(node) {
    let slow = node;
    let fast = node.next;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function sortedMerge(a, b) {
    let result = null;

    if (a === null) return b;
    if (b === null) return a;

    if (a.value <= b.value) {
        result = a;
        result.next = sortedMerge(a.next, b);
    } else {
        result = b;
        result.next = sortedMerge(a, b.next);
    }

    return result;
}

function printList(node) {
    while (node !== null) {
        console.log(node.value);
        node = node.next;
    }
}

// Example:
let node1 = new ListNode(40);
let node2 = new ListNode(20);
let node3 = new ListNode(60);
let node4 = new ListNode(10);
let node5 = new ListNode(50);
let node6 = new ListNode(30);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log("Original Linked List:");
printList(node1);

let sortedHead = mergeSort(node1);

console.log("\nSorted Linked List:");
printList(sortedHead);
