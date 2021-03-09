/*JavaScript function that returns array elements larger than
  a number.*/


/*Functions are first-class citizens in JS, so you can create
a function which returns another function */


function arrayMaxElement(value) {
    return function(element, index, array) {
        return (element >= value);
    }
}
let result = [12, 5, 8, 130, 44].filter(arrayMaxElement(10));
console.log(result)