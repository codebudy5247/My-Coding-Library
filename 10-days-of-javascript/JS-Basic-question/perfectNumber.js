/*
JavaScript function which says whether a number is perfect.
*/
function perfectNumber(n) {
    let c = 0
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            c = c + i
        }
    }
    if (c === n) {
        console.log("perfect")
    } else {
        console.log("notPerfect")
    }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(10)
perfectNumber(496)
perfectNumber(8128)