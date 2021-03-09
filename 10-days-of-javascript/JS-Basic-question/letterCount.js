/*JavaScript function to get the number of occurrences of each letter
  in specified string. */

/*function letterCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; i++) {
            if (str[i] === str[j]) {
                count = count + 1
            }
        }
    }
    return str.count
}
console.log(letterCount("The quick brown fox jumps over the lazy dog"));

======================================================================*/
function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));