function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low === high) {
            if (arr[low] === x) return low;
            return -1;
        }

        let position = low + (((high - low) / (arr[high] - arr[low])) * (x - arr[low]));

        if (arr[position] === x) return position;

        if (arr[position] < x) low = position + 1;
        else high = position - 1;
    }

    return -1;
}

// Example
let arr = [10, 12, 15, 17, 19, 21, 24, 27, 30];
let searchValue = 10;
let index = interpolationSearch(arr, searchValue);

console.log(index !== -1 ? `Value ${searchValue} found at index ${index}` : `Value ${searchValue} not found`);
