/**
 * The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
largestPrimeFactor(13195) should return 29.
 */

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

function findFactors(value) {
  var array = [];
  for (var i = 2; i < value; i++) {
    if (value % i == 0) {
      array.push(i);
    }
  }
  return array;
}

const largestPrimeFactor = (n) => {
  let i = 2;
  while (i * i < n) {
    while (n % i === 0) {
      n /= i;
    }
    i++;
  }
  return n;
};

console.log(largestPrimeFactor(600851475143));
