/*
  JavaScript function to split a string and convert it into an array of words.
*/
function stringToArray(str) {
    return str.trim().split(" ")
}
console.log(stringToArray("Mango,Apple,Papaya"))

/*
trim()-->removes whitespace from both sides of string.
split()-->split the string into array of substring.

*/