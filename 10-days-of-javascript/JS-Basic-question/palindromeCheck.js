/*
 JavaScript function that checks whether a passed string is palindrome or not?
*/
function isPalindrome(str) {
    // let cleanstr = str.trim()
    let string = str.split('').reverse().join('')
    if (str === string) return true;
    else return false

}
console.log(isPalindrome('madam'))
console.log(isPalindrome('aditya'))
console.log(isPalindrome('nurses'))
console.log(isPalindrome('A car a man a maraca'))
console.log(isPalindrome('Rats live on no evil star'))
console.log(isPalindrome('Lid off a daffodil'))
console.log(isPalindrome('Animal loots foliated detail of stool lamina'))
console.log(isPalindrome('A nut for a jar of tuna'))