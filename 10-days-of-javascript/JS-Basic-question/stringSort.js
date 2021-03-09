/*
JavaScript function that returns a passed string with letters in alphabetical order.
*/

function stringSort(str) {
    return str.split('').sort().join(' ')
}
console.log(stringSort('webmaster'))