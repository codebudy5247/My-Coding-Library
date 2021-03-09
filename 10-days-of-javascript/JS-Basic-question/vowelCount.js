/*
JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
*/

function vowelCount(str) {
    var vowelList = 'aeiouAEIOU';
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (vowelList.indexOf(str[i]) !== -1) {
            count += 1;
        }

    }
    return count;
}
console.log(vowelCount('the quick brown fox'))