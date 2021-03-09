/*
JavaScript function to extract a specified number of characters from a string.
*/

function truncateString(str, length) {
    if ((str.constructor === String) && (length > 0)) {
        return str.slice(0, length)
    }
};
console.log(truncateString("Aditya", 4))