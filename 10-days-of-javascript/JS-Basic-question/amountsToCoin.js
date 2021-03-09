/*JavaScript function to convert an amount to coins. */

/*function atc(amount, coins) {
    let arr = [25, 10, 5, 2, 1]
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        if (amount >= arr[i]) {
            amount = amount - arr[i]
            str = str + arr[i] + ','
        }
    }
    return str.substring(0, str.length - 1)

}
console.log(atc(46, [25, 10, 5, 2, 1]))*/


function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        } else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));