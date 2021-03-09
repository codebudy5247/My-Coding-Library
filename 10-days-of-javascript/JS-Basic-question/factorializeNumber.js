function fact(n) {
    for (var i = 1; n > 0; n--) {
        i *= n;
    }
    return i;

}

console.log(fact(5));