/* Implement binarySearch */

function binarySearch(arr, key) {
    //define start and end
    let start = 0;
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
            //compare target with mid value
        if (key === arr[mid]) {
            return mid
        }
        //search right side of array
        if (key > arr[mid]) {
            start = mid + 1
        }
        //search left side of array
        if (key < arr[mid]) {
            end = mid - 1
        }
    }
    //if key is not found
    return "Key value not found"
}
console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14], 6))
console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14], 16))
console.log(binarySearch(['apple', 'mango', 'guava', 'pear'], 'pear'))