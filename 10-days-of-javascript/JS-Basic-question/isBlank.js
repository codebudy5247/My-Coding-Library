/**
 -->a JavaScript function to check whether a string is blank or not.
 */

let isBlank = (input) => {
    if (input.length === 0)
        return true;
    else return false;
};

console.log(isBlank('abc'));
console.log(isBlank(''))