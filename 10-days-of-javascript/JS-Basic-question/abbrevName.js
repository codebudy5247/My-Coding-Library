/*
JavaScript function to convert a string in abbreviated form.
*/
function abbrevName(str) {
    let splitName = str.split(" ")
    if (splitName.length > 0) {
        return (splitName[0] + " " + splitName[1].charAt(0))
    }
    return splitName[0];
}
console.log(abbrevName("Robin Singh"))
console.log(abbrevName("Aditya shekhar"))