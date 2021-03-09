/*
-->A JavaScript function to check whether an `input` is a string or not.
*/

function isString(value) {
    if (typeof value === 'string')
        return true;
    else return false;
}
console.log(isString([1, 2, 3]));
console.log(isString('john'));