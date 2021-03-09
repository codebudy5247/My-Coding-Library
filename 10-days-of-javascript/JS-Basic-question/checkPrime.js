/*
JavaScript function that accepts a number as a parameter and check the number is prime or not.
*/

function isPrime(n) {

    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(37));
console.log(isPrime(15));
console.log(isPrime(19));