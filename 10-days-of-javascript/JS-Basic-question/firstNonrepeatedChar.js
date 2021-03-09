/*JavaScript function to find the first not repeated character */
function nonRepeated(str) {
    let str1 = str.split('')
    let result = ''
    let count = 0
    for (let i = 0; i < str1.length; i++) {
        count = 0
        for (let j = 0; j < str1.length; j++) {
            if (str1[i] == str1[j]) {
                count = count + 1
            }
        }
        if (count < 2) {
            result = str1[i]
            break
        }
    }
    return result
}
console.log(nonRepeated('abacddbec'))