function letterCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count = count + 1
        }
    }
    return count
}
console.log(letterCount('aditya', 'a'))