/* JavaScript function to extract unique characters from a string. */

function uniqueChar(str) {
    let unique = ''
    let count = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
                unique = unique + str[i]
            }
        }
    }
    return unique
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"))

/*=================================================================== */

function unique_char(str1) {
    var str = str1;
    var unique = "";
    for (var i = 0; i < str.length; i++) {

        if (unique.indexOf(str.charAt(i)) == -1) {
            unique += str[i];

        }
    }
    return unique;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

/*==================================================================== */