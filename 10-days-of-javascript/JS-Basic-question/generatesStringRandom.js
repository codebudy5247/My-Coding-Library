/* JavaScript function that generates a string id (specified length)
   of random characters. */

function stringGenerate(num) {
    let str = ''
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
    for (let i = 0; i < num; i++) {
        str += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return str

}
console.log(stringGenerate(5))
console.log(stringGenerate(3))