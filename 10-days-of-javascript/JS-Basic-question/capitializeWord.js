/*
JavaScript function to capitalize the first letter of each word in a string.
*/
function capitializeWord(str) {
    let splitStr = str.toLowerCase().split(" ")
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
    }
    return splitStr.join(' ')
}
console.log(capitializeWord('js string exercises'))