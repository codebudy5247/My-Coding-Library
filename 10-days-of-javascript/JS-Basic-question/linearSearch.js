/*Implement linearSearch */

function linearSearch(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return null;
}
console.log(linearSearch([1, 2, 3, 5, 6, 7, 10, 11, 14], 6))
console.log(linearSearch([1, 2, 3, 5, 6, 7, 10, 11, 14], 16))