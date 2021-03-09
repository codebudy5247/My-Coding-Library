/*
JavaScript function that accepts a string as a parameter and find the longest word within the string.
*/

function longestWord(str) {
    let sortedArray = str.split(' ')
        .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}
console.log(longestWord('i love comp programming'))
console.log(longestWord('full stack developement '))