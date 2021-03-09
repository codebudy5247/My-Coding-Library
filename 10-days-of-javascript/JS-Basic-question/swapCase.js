/*
JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
*/
function switchCase(string) {
    var swap = [];
    for (var i = 0; i < string.length; i++) {
        if (string != " ") {
            if (string[i] == string[i].toUpperCase()) {
                swap.push(string[i].toLowerCase());
            } else {
                swap.push(string[i].toUpperCase());
            }
        }
    }
    return swap.join("");
}

console.log(switchCase("i LOVE PiZzA"));